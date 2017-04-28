'use strict';
const webpack = require('webpack');

module.exports = {
  entry: {
    app: "./src/js/app.js",
  },
  output: {
    filename: '[name].js',
    path: __dirname + "/dst/js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};
