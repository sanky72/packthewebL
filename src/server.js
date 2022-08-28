const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.get("/hello-world", function (req, res) {
  const pathToHtml = path.resolve(__dirname, "../dist/hello-world.html");
  const contentHtml = fs.readFileSync(pathToHtml, "utf-8");
  res.send(contentHtml);
});

app.get("/happy", function (req, res) {
  const pathToHtml = path.resolve(__dirname, "../dist/happy.html");
  const contentHtml = fs.readFileSync(pathToHtml, "utf-8");
  res.send(contentHtml);
});

app.listen(3000, function () {
  console.log("server has started at 3000");
});
