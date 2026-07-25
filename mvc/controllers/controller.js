import { userModel } from "../model/model.js";

export const addController = async (req, res) => {
  try {
    const { name, email, passward } = req.body;
    const data = new userModel({ name, email, passward });
    const result = await data.save();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send("internal server error");
  }
};

export const readController = async (req, res) => {
  try {
    const data = await userModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send("internal server error");
  }
};
export const delController = async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await userModel.deleteOne({ _id });
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send("internal server error");
  }
};
export const editController = async (req, res) => {
  try {
    const { _id } = req.params;
    const { name, email, passward } = req.body;
    const result = await userModel.updateOne(
      { _id },
      { $set: { name, email, passward } },
    );
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send("internal server error");
  }
};



//now we'll use res.json and send in object


