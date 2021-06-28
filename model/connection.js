const mongoose = require('mongoose');

//Connect with db
// mongoose.connect("mongodb://localhost:27017/Auth", {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true
// }).then(() =>{
//     console.log(`Connection successful`);
// }).catch(() =>{
//     console.log(`Unsuccessful`);
// })

// mongoose.connection.once('open', function(){
//     console.log("Connected to DB");
// }).on('error', function(error){
//     console.log("error: ")
// });