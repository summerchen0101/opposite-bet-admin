/* eslint-disable @typescript-eslint/no-var-requires */
const Dotenv = require('dotenv-webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const path = require('path')
const apiDomain = 'http://opposite-adminapi.ms5149514.com:14951'
module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  plugins: [
    new Dotenv(),
    new CaseSensitivePathsPlugin(),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['public'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html',
    }),
  ],
  output: {
    publicPath: '/',
    path: __dirname + '/public',
    filename: 'build/[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://opposite-adminapi.ms5149514.com:14951',
        changeOrigin: true,
        pathRewrite: { '^/api': '/api/v1' },
      },
    },
  },
}
