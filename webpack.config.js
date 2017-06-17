const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './react_clientside/src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [['es2015', {'modules': false}], 'react', 'stage-0'],
        plugins: [
          //'transform-object-rest-spread',
          'lodash']
      }
    },  {
      test: /\.s?css$/,
      use: [ 'style-loader',
        {
          loader:'css-loader',
          options: {
            sourceMap: 'true',
            importLoaders: 1
          }
        },
        {
          loader: 'sass-loader' // compiles Sass to CSS
        }, 
      ]
    }],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './react_clientside/public/',
    hot: true
  },
  plugins: [
    new LodashModuleReplacementPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
