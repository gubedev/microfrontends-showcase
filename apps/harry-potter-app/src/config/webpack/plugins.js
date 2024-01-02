const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("../../../package.json").dependencies;

function getPlugins(prod = false) {
  return [
    new ModuleFederationPlugin({
      name: "harry_potter",
      /*
      
      Caching
      
      The [contenthash] substitution will add a unique hash based on the content of an asset.
      When the asset's content changes, [contenthash] will change as well.

      */
      filename: prod ? "remoteEntry.[contenthash].js" : "remoteEntry.js",
      exposes: {
        "./app": "./src/app",
      },
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: deps.react },
        "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
      },
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ];
}

module.exports = getPlugins;
