const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    "hello-world": "./src/hello-world.js",
    happy: "./src/happy.js",
  },
  output: {
    filename: "[name].[contenthash].js", // file output name
    path: path.resolve("./dist"), // the folder for the above file storage
    // publicPath: "", // not needed in webpack >= 5
    // clean: true,  // default offering from webpack to clear the folder in output.path
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 3000,
    },
  },
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
        use: [MiniCssExtractPlugin.loader, "css-loader"], // order matters here
      },

      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // order matters here
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
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Hello world",
      chunks: ["hello-world"],
      filename: "hello-world.html",
      description: "hello world",
      template: "src/page-template.hbs",
    }),
    new HtmlWebpackPlugin({
      title: "Happy",
      chunks: ["happy"],
      filename: "happy.html",
      description: "Happy",
      template: "src/page-template.hbs",
    }),
  ],
};
