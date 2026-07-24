import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); // data json allow to send on serve

// how to connect database

const dbconnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    if (conn) {
      console.log("db connected successfully ...");
    }
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
dbconnect();

// way to create structure in db
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
});

// for create table
const userModel = mongoose.model("users", userSchema);

// making server using above userModel schema

// we are sending data
app.post("/addUser", async (req, res) => {
  const { name, email, mobile } = req.body;
  const data = new userModel({ name, email, mobile });
  const result = await data.save();
  res.send(result);
});

app.get("/readUser", async (req, res) => {
  const result = await userModel.find();
  res.send(result);
});


// by using params
app.delete("/del", async (req, res) => {
  const { email } = req.query;
  const result = await userModel.deleteOne({ email });
  res.send(result);
});

// for updating

app.put('/updateUser',async (req,res) => {
  const {name,email,mobile}= req.body;
  const result = await userModel.updateOne({email},{$set:{name,email,mobile}})
  res.send(result)
})




// this code is used to make server and tested on POSTMAN OR THUNDERCLIENT
// app.get("/data", (req, res) => {
//   // we can send arr or arrayObject
//   res.send(`mil jayega data `);
// });

// app.post("/insertData", (req, res) => {
//   res.send(`data bhej rhe h `);
// });
// app.delete("/delete", (req, res) => {
//   const arr = [{ name: "Ravi", age: 21 }];
//   res.send(arr);
// });

app.listen(PORT, () => {
  console.log(`server is running... on ${PORT}`);
});
