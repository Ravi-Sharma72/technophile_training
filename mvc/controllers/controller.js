import { userModel } from "../model/model.js";


export const addController = async(req, res) => {
     const { name, email, passward } = req.body;
  const data = new userModel({ name, email, passward });
  const result = await data.save();
  res.send(result);
};

export const readController = async (req, res) => {
  const data = await userModel.find();
  res.send(data);
}
export const delController =async (req, res) => {
  const { _id } = req.params;
  const result = await userModel.deleteOne({ _id });
  res.send(result);
}
export const editController = async (req, res) => {
  const { _id } = req.params;
  const { name, email, passward } = req.body;
  const result = await userModel.updateOne(
    { _id },
    { $set: { name, email, passward } },
  );
  res.send(result);
}




 