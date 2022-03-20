const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
    },
    module: {
      rules: [
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: "babel-loader" 
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.png/,
          type: 'asset/resource',
        },
        {
          test: /\.(mp4|webm)$/,
          type: 'asset/resource',
        },   
      ],  
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
  };