#!/bin/bash

if [ -d "html" ]; then
  configsDirectory='./configs'
  distDirectory='./html'
else
  configsDirectory='../../configs'
  distDirectory='../../dist'
fi

configFile=`echo $NODE_ENV.config.js | tr '[:upper:]' '[:lower:]'`
configFilePath=`echo $configsDirectory/$configFile`
distConfig=`echo $distDirectory/config.js`

if [ -f $distConfig ]; then
  rm -rf $distConfig
fi

echo $(cat $configFilePath) >> $distConfig

# Replace Config Function
sed -i -e 's/module.exports/window.Config/g' $distConfig

envFile=`cat $distConfig`

sed -i -e 's|<!--ENVIRONMENT-->|<script>'"$envFile"'</script>|g' $distDirectory/index.html

# Replace Base Url
baseUrl=`grep "BASE_URL" $distDirectory/config.js | grep -oE "(http|https)://[a-zA-Z0-9./?=_-]*"`
sed -i -e 's|"assets|"'$baseUrl'/assets|g' $distDirectory/index.html
sed -i -e 's|"[.]/|"'$baseUrl'/|g' $distDirectory/index.html

exec nginx -g 'daemon off;' "$@"
