const path = require("path");
const TercerPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js", // file output name
    path: path.resolve("./dist"), // the folder for the above file storage
  },
  mode: "none",
  module: {
    // rules: [{ test: /\.(png|jpg)$/, type: "asset/resource" }],
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024,
          },
        },
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // order matters here
      },

      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"], // order matters here
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
    ],
  },
  plugins: [new TercerPlugin()],
};
