const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build',
  },

  devtool: 'inline-source-map',

  devServer: {
    inline: true,
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'public')
    
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader'
          },
          'file-loader?name=[name].[ext]'
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Marvel Manager',
      template: path.join(__dirname, './public/index.html')
    }),
  ]
};

module.exports = config;
