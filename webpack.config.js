const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = [
  'source-map'
].map(devtool => ({
  mode: 'production',
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
    path: path.resolve(__dirname, 'lib'),
    filename: 'linear-least-squares.js',
    library: 'LinearLeastSquares',
    libraryTarget: 'umd',
    globalObject: '(typeof self !== \'undefined\' ? self : this)'
  },
  optimization: {
    runtimeChunk: false,
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        // include: /\.min\.js$/,
        uglifyOptions: {
          // sourceMap: true,
          compress: true,
          mangle: true
        }//,
        //sourceMap: true
      })
    ]
  }
}));
