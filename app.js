const express = require("express");
const app = express();

app.post("/", (req, res) => {
    res.status(200).send.File("home.html", {root: "./views"});
  });

  app.get("/dashboard", (req, res) => {
    res.send("<H1>Dashboard page</H1>");
  });

  app.get("/register", (req, res) => {
    res.send("<H1>Register page</H1>");
  });

  app.get("/login", (req, res) => {
    res.send("<H1>Login page</H1>");
  });

  app.use((req, res) => {
    res.status(401).send("Page doesn't exist!");
  });

  module.exports = app;