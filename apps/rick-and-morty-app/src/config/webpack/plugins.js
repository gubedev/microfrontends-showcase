const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("../../../package.json").dependencies;

function getPlugins(isProduction = false) {
  return [
    new ModuleFederationPlugin({
      name: "rick_and_morty",
      /*
      
      Caching
      
      The [contenthash] substitution will add a unique hash based on the content of an asset.
      When the asset's content changes, [contenthash] will change as well.

      */
      filename: isProduction
        ? "remoteEntry.[contenthash].js"
        : "remoteEntry.js",
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
