module.exports = {
  context: __dirname,
  entry: ["./src/TypeAheadDropdown/index.js"],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    compress: true,
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
      },
    ],
  },
};
