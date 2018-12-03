import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  debug: true,
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.join(__dirname, '/src/reactjs/index')
  ],
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, '/src/reactjs/')
  },
  output: {
    path: path.join(__dirname, '/dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
