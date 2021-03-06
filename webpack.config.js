module.exports = {
  entry: "./main.js",
  output: {
    oath: './',
    filename: "index.js"
  },
  devServer : {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
