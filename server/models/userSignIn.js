const mongoose = require("mongoose");
const userSignInSchema =  new mongoose.Schema({
    userName : String,
    userEmail : String,
    userPassword : String
})
module.exports = mongoose.model("userSignIn",userSignInSchema)