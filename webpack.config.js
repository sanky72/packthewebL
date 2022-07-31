const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js", // file output name
    path: path.resolve("./dist"), // the folder for the above file storage
  },
  mode: "none",
};
