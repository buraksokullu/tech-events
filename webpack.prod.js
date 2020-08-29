const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common');

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const buildPath = '/';

module.exports = merge(common, {
  mode: 'production',
  entry: ['./app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: buildPath,
    filename: 'assets/[name].[chunkhash].js',
    chunkFilename: 'assets/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: path.resolve(__dirname, './node_modules'),
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: {
                localIdentName: '[name]-[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                './app/assets/stylesheets/_variables.scss',
                './app/assets/stylesheets/mixins/_media.scss',
                './app/assets/stylesheets/mixins/_mixins.scss'
              ]
            }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        include: path.resolve(__dirname, './node_modules'),
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|eot|svg|woff(2)?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
              publicPath: buildPath !== './' ? `${buildPath.slice(0, -1)}/assets` : buildPath
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new TerserJSPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6
      }
    }),
    new ExtractCssChunks({
      filename: 'assets/[chunkhash].css',
      chunkFilename: 'assets/[chunkhash].css',
      orderWarning: false
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    runtimeChunk: false
  }
});
