const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: './react-lightning-webpack/src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'App.bundle.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'] // Loads .babelrc
      },
      {
        test: require.resolve('./react-lightning-webpack/src/index'),
        loaders: ["expose-loader?reactApp", "babel-loader?presets[]=env,presets[]=react,presets[]=stage-1"]
      }
    ]
  },
  stats: {
    colors: true
  }
  //devtool: 'inline-source-map' // Comment when in production
}