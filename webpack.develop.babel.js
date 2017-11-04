import path from 'path';
import merge from 'webpack-merge';

import common from './webpack.common.babel.js';

export default merge(common, {
  output: {
    path: path.resolve(__dirname, 'src/assets'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map'
});
