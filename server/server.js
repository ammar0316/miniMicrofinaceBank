const express = require("express");
const app = express();
const router = express.Router();
const userSignInModels = require("./models/userSignIn");
const applyLoanModals = require("./models/applyLoan");
const donateLoanModel = require("./models/donateLoanModel");
const dbConnect = require("./db/dbConnection");
const bcrypt = require("bcrypt");
const cors = require("cors");

app.use(cors());
app.use(express.json());

dbConnect();
app.post("/signup", async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;
    const hashUserPassword = await bcrypt.hash(userPassword, 10);
    const sendData = await userSignInModels.insertOne({
      userName,
      userEmail,
      userPassword: hashUserPassword,
    });
    res.status(200).send("data send seccessfully!!");
  } catch (err) {
    console.log(err);
  }
});
app.post("/signin", async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    const isExistingUser = await userSignInModels.findOne({
      userEmail: userEmail,
    });
    if (isExistingUser) {
      const isPassword = await bcrypt.compare(
        userPassword,
        isExistingUser.userPassword
      );
      if (isPassword) {
        res
          .status(200)
          .send({ message: "Login successful", user: isExistingUser });
      } else {
        res.status(200).send({ message: "Invalid password" });
      }
    } else {
      res.status(200).send("user do not exist");
    }
  } catch (err) {
    res.status(200).send(err);
  }
});
// app.get("/getSignIn",async(req, res)=>{
//   try{
//      const signInUser = await userSignInModels.find()
//      res.status(200).send({message : "data fetched !!" , user : signInUser})

//   }catch(err){
//     res.status(400).send({message: err})

//   }
// })

// app.get("/userProfile/:name",async(req,res)=>{
//     const name = req.params.name
//   const validUser = await  userSignInModels.findOne({userName :userName})
//   if(validUser){
//     res.status(200).send({message : "user find"},validUser)
//   }else{
//     res.status(404).send({message : "user not found"})
//   }
// })

// app.get("/userProfile", async (req, res) => {
//   try {
//     // const name = req.params.name;

//     const validUser = await userSignInModels.findOne({});
//     const findValidUser  = await applyLoanModals.find({})
//     const compareUser = await bcrypt.compare(validUser.userEmail , findValidUser.email)

//     if (compareUser) {
//       res.status(200).send({
//         message: "user found",
//         user: validUser,
//         loan : findValidUser.loan
//       });
//     } else {
//       res.status(404).send({ message: "user not found" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: "Server error" });
//   }
// });

app.get("/userProfile", async (req, res) => {
  try {
    
    const userLoan = await applyLoanModals.find({});

    res.status(200).send({
      message: "User and loan found",
      user: userLoan,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
});

// apply loan route
app.post("/applyloan", async (req, res) => {
  try {
    const { allData } = req.body;
    const respose = await applyLoanModals.insertMany(allData);
    res.status(200).send({ message: "data send succesfully", user: respose });
  } catch (err) {
    res.status(404).send(err);
  }
});
// get loan data
app.get("/allloans", async (req, res) => {
  try {
    const loans = await applyLoanModals.find({});
    res.status(200).send({ loans });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
});

// update loan one
app.post("/loanreview", async (req, res) => {
  try {
    const { email, loanType, status } = req.body;

    const updatedLoan = await applyLoanModals.findOneAndUpdate(
      { email, loanType },
      { $set: { status } },
      { new: true }
    );

    if (!updatedLoan) {
      return res.status(404).send({ message: "Loan not found" });
    }

    res.status(200).send({ message: "Loan status updated", loan: updatedLoan });
  } catch (error) {
    console.error("Error updating loan:", error);
    res.status(500).send({ message: "Server error" });
  }
});
// get sign up user
app.get("/getAllUser", async (req, res) => {
  try {
    const allData = await userSignInModels.find({});
    res
      .status(200)
      .send({ message: "data fetched seccussfuly", user: allData });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/getAllLoanUser", async (req, res) => {
  try {
    const allData = await applyLoanModals.find({ status: "Accepted" });
    if (allData) {
      res
        .status(200)
        .send({ message: "data fetched seccussfuly", user: allData });
    } else
      res.status(400).send({ message: "no current loan user", user: null });
  } catch (err) {
    res.status(400).send(err);
  }
});
// donate loan model
app.post("/donate-loan", async(req, res)=>{
  try {
     const donateData = req.body
  const donateResponse = await donateLoanModel.insertMany(donateData)
  res.status(200).send({message : "thanks for donate loan !", user : donateResponse})
  } catch (error) {
    res.status(400).send({message : err})
    
  }
 
})
app.get("/loanDonor", async(req, res)=>{
  try {
     const donateData = req.body
  const donateResponse = await donateLoanModel.find({})
  res.status(200).send(donateResponse)
  } catch (error) {
    res.status(400).send({message : err})
    
  }
 
})

// to create server..
app.listen(3000, () => {
  try {
    console.log("Server listening Now....");
  } catch (error) {
    console.log(error);
  }
});
