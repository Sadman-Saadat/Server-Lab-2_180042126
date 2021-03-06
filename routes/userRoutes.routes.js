const express = require("express");
const router = express.Router();
const {getRegister, postRegister} = require("../controllers/usercontroller");
const {getDashboard, getHome, getLogin, postLogin} = require("../controllers/authcontroller");

const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

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

  router.post("/dashboard", getDashboard);

router.get("/register", (req, res) => {
    res.status(200).sendFile("register.html", {root: "./views/users"});
  });

  router.post("/register", postRegister)

router.get("/login", (req, res) => {
    res.status(200).sendFile("login.html", {root: "./views/users"});
  });

  router.post("/login", postLogin)

router.use((req, res) => {
    res.status(401).send("Page doesn't exist!");
  });
  
  module.exports = router;