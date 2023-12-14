const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "ui-lib.js",
    path: path.resolve(__dirname, "dist"),
    library: "MyReactLib",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
