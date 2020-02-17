const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = [
  'source-map'
].map(devtool => ({
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'linear-least-squares.js',
    library: 'LinearLeastSquares',
    libraryTarget: 'umd',
    globalObject: '(typeof self !== \'undefined\' ? self : this)'
  },
  optimization: {
    runtimeChunk: false,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          sourceMap: true,
          compress: true,
          mangle: true
        },
        sourceMap: true
      })
    ]
  }
}));
