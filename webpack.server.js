const path = require('path');

module.exports = {
  // inform webpack that we're building a bundle for nodeJS instead of browser
  target: 'node',

  // tell webpack root file of server app
  entry: './src/index.js',

  // tell webpack where to put generated output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // tell webpack to run babel on every file it runs
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] }}]
          ]
        }
      }
    ]
  }
};