const path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: './src/ClientApp.jsx',

  devServer: {
    historyApiFallback: true
  },

  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production')
            },
            'process.env.BROWSER': true
          }),
          new webpack.optimize.OccurrenceOrderPlugin(),
          new webpack.optimize.UglifyJsPlugin(),
          new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
          new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
          })
        ]
      : [],

  output: {
    filename: 'bundle.js',
    publicPath: '',
    path: path.join(__dirname, 'public')
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  }
};
