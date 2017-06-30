const path = require('path')

module.exports = {
  entry: './src/ClientApp.jsx',

  devServer: {
    historyApiFallback: true
  },

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
      // {
      //   test: /\.json$/,
      //   loader: 'json-loader'
      // },
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
      }
    ]
  }
}
