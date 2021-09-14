const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `bundle.${ext}` : `bundle.${ext}`;

module.exports = {
  //context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry:'./src/index.js',
  output: {
    filename: `./${filename('js')}`,
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    open: true,
    compress: true,
    hot: true,
    port: 8000,
  },
  devtool: isProd ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
],
};