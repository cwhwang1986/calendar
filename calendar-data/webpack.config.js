'use strict'
const path = require('path');
const config = {
  entry: {
    coursera_assignment: ['babel-polyfill', path.join(__dirname, 'public/js/init')]
  },
  output: {
    path: path.join(__dirname, 'public/assets/'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],  
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        exclude: /node_modules/,
      }
    ]
  }
};
module.exports = config;