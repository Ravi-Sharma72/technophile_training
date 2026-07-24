import express from "express";
import {
  addController,
  readController,
  delController,
  editController,
} from "../controllers/controller.js";

const router = express.Router();

router.post("/add", addController);

router.get("/read", readController);

router.delete("/del/:_id", delController);

router.put("/edit/:_id", editController);

export default router;
