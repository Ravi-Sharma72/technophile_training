import express from "express";
import dbConnect from "./config/db.js";
import router from "./route/router.js";
import dotenv from "dotenv";
const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 4000;
dbConnect();
app.use(router);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
