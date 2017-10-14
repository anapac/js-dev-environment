'use strict';

// import webpack from 'webpack';
import path from 'path';

export default {
  // debug: true,
  devtool: 'inline-source-map',
  // noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: [
        { loader: 'style-loader' },
        { loader: 'css-loader', options: { modules: true } } ]
      }
    ]
  }
}
