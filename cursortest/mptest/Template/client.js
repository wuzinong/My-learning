/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));
var server = app.listen(80, function () {
  console.log(path.join(__dirname, "build"));
  var port = server.address().port;
  console.log("Server started: http://localhost:%s", port);
});
