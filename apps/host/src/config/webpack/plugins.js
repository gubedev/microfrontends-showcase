const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("../../../package.json").dependencies;

function getPlugins(isProduction = false) {
  const RICK_AND_MORTY_URL = isProduction
    ? "http://rick-and-morty-mf.s3-website-us-east-1.amazonaws.com"
    : "http://localhost:3002";
  const HARRY_POTTER_URL = isProduction
    ? "http://harry-potter-app.s3-website-us-east-1.amazonaws.com"
    : "http://localhost:3003";

  /*
      
    Caching
    
    The [contenthash] substitution will add a unique hash based on the content of an asset.
    When the asset's content changes, [contenthash] will change as well.

  */

  const rick_and_morty = isProduction
    ? `rick_and_morty@${RICK_AND_MORTY_URL}/remoteEntry.[contenthash].js`
    : `rick_and_morty@${RICK_AND_MORTY_URL}/remoteEntry.js`;

  const harry_potter = isProduction
    ? `harry_potter@${HARRY_POTTER_URL}/remoteEntry.[contenthash].js`
    : `harry_potter@${HARRY_POTTER_URL}/remoteEntry.js`;

  return [
    new ModuleFederationPlugin({
      name: "host",
      exposes: {
        "./app": "./src/app",
      },
      remotes: {
        rick_and_morty,
        harry_potter,
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
