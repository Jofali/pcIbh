module.exports = {
  entry: './build.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/, 
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(woff|svg|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      }
    ]
  }
}