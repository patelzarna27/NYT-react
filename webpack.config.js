module.exports = {

  // This code will be compiled
  entry: "./app/app.js",

  // Then output into this file
  output: {
    filename: "public/bundle.js"
  },

  // This will be what we do
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        excluse: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
