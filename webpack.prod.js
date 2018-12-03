import path from 'path';
import merge from 'webpack-merge';
import common from './webpack.common.js';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default merge(common, {
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ],
  mode: 'production',
  entry: [
     path.join(__dirname, '/src/reactjs/index')
  ],
  devServer: {
    contentBase: './dist'
  }
});
