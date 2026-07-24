import mongoose from "mongoose";
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

export default dbConnect;
