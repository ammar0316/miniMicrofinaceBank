const mongoose = require("mongoose");
const dbConnect = async()=>{
    try{

       await mongoose.connect("mongodb://localhost:27017/microfinance")
        console.log("mongodb connected..")
    }catch(err){
        console.log(err)
    }
}
module.exports = dbConnect;
