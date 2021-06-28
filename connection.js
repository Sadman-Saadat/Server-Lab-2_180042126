const mongoose = require('mongoose');

//Connect with db
mongoose.connect('mongodb://localhost/auth');

mongoose.connection.once('open', function(){
    console.log("Connected to DB");
}).on('error', function(error){
    console.log("error: ")
});