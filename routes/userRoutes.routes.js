const express = require("express");
const router = express.Router();


// router.get("/", (req, res) => {
//     res.send("<H1>Home page</H1>");
//   });

// router.post("/", (req, res) => {
//    res.send("<H1>Home page</H1>");
// });

router.get("/", (req, res) => {
    res.status(200).sendFile("home.html", {root: "./views"});
  });

router.post("/", (req, res) => {
    res.status(200).sendFile("home.html", {root: "./views"});
  });

router.get("/dashboard", (req, res) => {
    res.send("<H1>Dashboard page</H1>");
  });

router.get("/register", (req, res) => {
    res.status(200).sendFile("register.html", {root: "./views/users"});
  });

router.get("/login", (req, res) => {
    res.status(200).sendFile("login.html", {root: "./views/users"});
  });

router.use((req, res) => {
    res.status(401).send("Page doesn't exist!");
  });
  
  module.exports = router;