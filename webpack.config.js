module.exports = {
  entry: ["./src/App.jsx"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
    modules: ["node_modules"]
  },
  output: {
    path: __dirname + "/static",
    filename: "bundle.js"
  }
};
