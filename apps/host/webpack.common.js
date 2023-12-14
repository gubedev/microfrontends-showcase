const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const srcPath = "src";

const isProduction = false;

const RICK_AND_MORTY_URL = isProduction
  ? "http://rick-and-morty-mf.s3-website-us-east-1.amazonaws.com"
  : "http://localhost:3002";
const HARRY_POTTER_URL = isProduction
  ? "http://harry-potter-app.s3-website-us-east-1.amazonaws.com"
  : "http://localhost:3003";

module.exports = {
  entry: "./src/index",
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: ["node_modules", srcPath],
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      exposes: {
        "./app": "./src/app",
      },
      remotes: {
        rick_and_morty: `rick_and_morty@${RICK_AND_MORTY_URL}/remoteEntry.js`,
        harry_potter: `harry_potter@${HARRY_POTTER_URL}/remoteEntry.js`,
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
      },
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
