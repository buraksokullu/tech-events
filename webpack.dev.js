const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const postCssConfig = require('./postcss.config');
const path = require('path');

const common = require('./webpack.common');

const envConfig = common.plugins[0].definitions['process.env'];

let newConfig;

newConfig = 'window.Config = { ';

Object.keys(envConfig).map((key, index) => {
  newConfig += `${key}: ${envConfig[key]}`;

  if (Object.keys(envConfig).length > index + 1) {
    newConfig += ', ';
  }
});

newConfig += '}';

module.exports = merge(common, {
  mode: 'development',
  entry: ['./app/index.js'],
  output: {
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: path.resolve(__dirname, './node_modules'),
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              hot: true,
              modules: true,
              reloadAll: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName:
                  envConfig.NODE_ENV === '"Development"'
                    ? '[name]-[local]'
                    : '[name]-[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: postCssConfig
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: false,
              resources: ['./app/assets/stylesheets/import.scss']
            }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        include: path.resolve(__dirname, './node_modules'),
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              hot: true,
              modules: true,
              reloadAll: true
            }
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|eot|svg|woff(2)?)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      environment: `<script>${newConfig}</script>`
    }),
    new ExtractCssChunks({
      filename: '[name].css',
      chunkFilename: '[id].css',
      orderWarning: true
    }),
    new BundleAnalyzerPlugin()
  ],
  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    hot: true,
    watchContentBase: true,
    disableHostCheck: true,
    compress: true,
    host: '0.0.0.0',
    public: 'localhost:8080',
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    }
  }
});
