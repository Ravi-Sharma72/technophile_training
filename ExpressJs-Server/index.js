import express from "express";
import dotenv from "dotenv";

dotenv.config();
app.use(express.json())
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`);
});


// practice for api
// app.post('/send',async (req,res) => {
//   const {name,email}= req.body
//   const data = new userModel({name,email})
//   const result= data.save()
//   res.send(result) 
  
// })

// app.get('/retrive',async (req,res) => {
//           const {name,email} = req.body
//           const result = await usermodel.find()
//           res.send(result)  
// })