import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  passward: String,
});

export const userModel = mongoose.model("mvcUsers", userSchema);