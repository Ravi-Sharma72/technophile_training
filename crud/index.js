import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 4000;

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    if (conn) {
      console.log("db connected successfully....");
    }
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
dbConnect();

const uesrSchema = new mongoose.Schema({
  name: String,
  email: String,
  passward: String,
});

const userModel = mongoose.model("userInfos", uesrSchema);

app.post("/add", async (req, res) => {
  const { name, email, passward } = req.body;
  const data = new userModel({ name, email, passward });
  const result = await data.save();
  res.send(result);
});

app.get("/read", async (req, res) => {
  const data = await userModel.find();
  res.send(data);
});

app.delete("/del/:_id", async (req, res) => {
  const { _id } = req.params;
  const result = await userModel.deleteOne({ _id });
  res.send(result);
});

app.put("/edit/:_id", async (req, res) => {
  const { _id } = req.params;
  const { name, email, passward } = req.body;
  const result = await userModel.updateOne(
    { _id },
    { $set: { name, email, passward } },
  );
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
