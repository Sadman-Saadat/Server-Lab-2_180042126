const userInfo = require('../controllers/usercontroller')
const conn = require('../model/connection')
const bcrypt = require('bcrypt');

const validation = (req, res, next) => {
    const password = req.body.password;
    const email = req.body.email;
    const reType_password = req.body.reType_password;

    if (password.length < 6) {
       console.log('Password is too short!')
       res.redirect('/register')
    }

    else if (password !== confirm) {
       console.log('Password not same')
       res.redirect('/register')
    }

    else if (!email.includes("@gmail.com")) {
       console.log('Please enter a valid mail')
       res.redirect('/register')
    } else {
        next()
    }
}
module.exports = checkRegistration