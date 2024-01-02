const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const getPlugins = require("./plugins");
const plugins = getPlugins(true);

module.exports = merge(commonConfig, {
  mode: "production",
  plugins: [...plugins],
});
