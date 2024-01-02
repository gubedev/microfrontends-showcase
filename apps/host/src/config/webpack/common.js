const srcPath = "src";
const rules = require("./rules");

module.exports = {
  entry: "./src/index",
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [...rules],
  },
  resolve: {
    modules: ["node_modules", srcPath],
    extensions: [".tsx", ".ts", ".js"],
  },
};
