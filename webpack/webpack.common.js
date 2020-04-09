const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, "../public/assets/js/index.js"),
    // Add your input file path here
  },
  output: {
    path: Path.join(__dirname, "../public/assets/dist"),
    filename: "js/[name].js",
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //     name: false,
  //   },
  // },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    alias: {
      "~": Path.resolve(__dirname, "../public/assets/js"),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
    ],
  },
};
