var webpack = require("webpack");
var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: "/dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
  },
  entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/public/'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react,presets[]=latest']
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loaders: ['json-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      }
    ]
  }
}
