import path from 'path';

export default {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'src/assets'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devtool: 'source-map'
};
