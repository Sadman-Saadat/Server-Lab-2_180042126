const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.status(200).send.File("home.html", {root: "./views"});
  });

router.post("/", (req, res) => {
    res.status(200).send.File("home.html", {root: "./views"});
  });

router.get("/dashboard", (req, res) => {
    res.send("<H1>Dashboard page</H1>");
  });

router.get("/register", (req, res) => {
    res.send("<H1>Register page</H1>");
  });

router.get("/login", (req, res) => {
    res.send("<H1>Login page</H1>");
  });

router.use((req, res) => {
    res.status(401).send("Page doesn't exist!");
  });
  
  module.exports = router;