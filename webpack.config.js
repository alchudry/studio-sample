var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.ts',
  mode: 'production',
  output: {
    filename: 'index.js',
    libraryTarget: 'this',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js' ],
  },
  externals: [nodeExternals()],
};
