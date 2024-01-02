const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const path = require("path");
const getPlugins = require("./plugins");

const plugins = getPlugins();

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [...plugins],
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3003,
    hot: true,
  },
});
