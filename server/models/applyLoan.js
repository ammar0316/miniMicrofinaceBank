const mongoose = require("mongoose");
const applyLoanSchema = new mongoose.Schema({
  name: String,
  email: String,
  salary: String,
  familyMembers: String,
  reason: String,
  loan: String,
  status: String,
  loanType: String,
});
module.exports = mongoose.model("applyLoanModal", applyLoanSchema);
