const userInfo = require('../model/connection');
const pass_encrypt = require("bcrypt");

const getRegister = (req,res)=> {
    res.sendFile("register.html", { root: "./views/users" });
};

const postRegister = async (req,res)=>{

    const encryptPass = await pass_encrypt.hash(req.body.password, 10)
    const user = new userInfo ({
        username:req.body.username,
        email:req.body.email,
        gender:req.body.gender,
        password:encryptPass

    })
    user.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
};

module.exports = { getRegister, postRegister };