const userInfo = require('../model/connection');
const pass_encrypt = require("bcrypt");

const getHome = (req, res) => {
    res.sendFile("home.html", { root: "./views" });
};

const getLogin = (req, res) => {
    res.sendFile("login.html", { root: "./views/users" });
};

const postLogin = async (req, res) => {
    const { email, password } = req.body;

    const user = await userInfo.findOne({email});
    if(!user) {
        return res.json({msg: "email doesn't exist."});
    }

    const checkPass = await pass_encrypt.compare(password, user.password)
    if(!checkPass) {
        return res.json({msg: "Password incorrect!"});
    }

    // if(password===user.password) {
    //     return res.json({msg: "Password is incorrect!"});
    // }

    res.redirect('../views/dashboard.html')
};

const getDashboard = (req, res) => {
    res.sendFile("dashboard.html", { root: "./views" });
};

module.exports = { getDashboard, getHome, getLogin, postLogin};