const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true,
    },
    
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
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
  };