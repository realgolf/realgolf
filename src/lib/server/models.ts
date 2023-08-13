import mongoose from "mongoose";

const User_Schema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  name: { type: String, require: true },
});

export const User_Model = mongoose.model("User", User_Schema);
