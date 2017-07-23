const webpack                 = require('webpack');
const path                    = require('path');
const fs                      = require('fs');
const WebpackNodeServerPlugin = require('webpack-node-server-plugin');
const nodeExternals           = require('webpack-node-externals');
let plugins = ''

if(process.env.NODE_ENV !== 'test'){
  plugins= [
    new WebpackNodeServerPlugin(),
    new webpack.BannerPlugin({
      banner:'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    })
  ]
}

module.exports = {
  devtool:'source-map',
  entry: './server.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'build.js'
  },
  externals: [nodeExternals()],
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['es2015',{modules:false}]],
        }
      }
    ]
  },
};