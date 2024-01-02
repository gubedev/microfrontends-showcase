const rules = [
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
];

module.exports = rules;
