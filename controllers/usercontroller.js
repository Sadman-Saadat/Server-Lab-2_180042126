const userInfo = require('../model/connection');

const getRegister = (req,res)=> {
    res.sendFile("register.html", { root: "./views/users" });
};

const postRegister = (req,res)=>{

    const user = new userInfo ({
        username:req.body.username,
        email:req.body.email,
        gender:req.body.gender,
        password:req.body.password

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