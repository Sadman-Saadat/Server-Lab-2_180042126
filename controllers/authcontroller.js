const userInfo = require('../model/connection');

const getHome = (req, res) => {
    res.sendFile("home.html", { root: "./views" });
};

const getLogin = (req, res) => {
    res.sendFile("login.html", { root: "./views/users" });
};

const postLogin = (req, res) => {
    res.send(req.body);
};

const getDashboard = (req, res) => {
    res.sendFile("index.html", { root: "./views" });
};

module.exports = { getDashboard, getHome, getLogin, postLogin};