const path = require("path");

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
    ],
  },
};
