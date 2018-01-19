const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // inform webpack that we're building a bundle for nodeJS instead of browser
  target: 'node',

  // tell webpack root file of server app
  entry: './src/index.js',

  // tell webpack where to put generated output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()]

};

module.exports = merge(baseConfig, config);