module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader'
        ],
        include: __dirname + '/src'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ],
        include: __dirname + '/src'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        include: __dirname + '/src'
      }
    ]
  }
}
