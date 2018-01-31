const webpack = require('webpack')
const path = require('path')
const pkg = require('./package.json')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: ['./demo/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    chunkFilename: '[name].assets.js'
  },
  module: {
    rules: [{
      test: /\.(less|css)$/,
      exclude: [path.resolve(__dirname, 'src/components')],
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "less-loader", "postcss-loader"]
      })
    }]
  },
  plugins: [new ExtractTextPlugin("styles.css"), ],
}