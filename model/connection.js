const mongoose = require('mongoose');

const userInfo = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: 'Email address is required'
    },

    gender: {
        type: String,
        required: 'Password is required'
    },

    password: {
        type: String,
        required: true
    },

    reType_password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', userInfo);