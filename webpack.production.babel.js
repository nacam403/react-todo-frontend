import path from 'path';
import merge from 'webpack-merge';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import saveLicense from 'uglify-save-license';

import common from './webpack.common.babel.js';

export default merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[chunkhash].js'
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        output: {
          comments: saveLicense
        }
      }
    })
  ]
});
