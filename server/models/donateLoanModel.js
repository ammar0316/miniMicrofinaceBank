const mongoose = require("mongoose");
const donateLoanSchema = new mongoose.Schema({
  name: String,
  email: String,
  amount: String
});
module.exports = mongoose.model("donateLoan",donateLoanSchema)