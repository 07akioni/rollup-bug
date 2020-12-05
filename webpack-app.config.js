const path = require('path')

module.exports = {
  mode: 'development',
  entry: './app-src/index.js',
  output: {
    path: path.resolve(__dirname, 'app-webpack'),
    filename: 'index.js'
  }
}