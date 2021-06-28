const express = require("express");
const app = express();

app.post("/", (req, res) => {
    res.status(200).send.File("home.html", {root: "./views"});
  });


  app.use((req, res) => {
    res.status(401).send("Page doesn't exist!");
  });

  module.exports = app;