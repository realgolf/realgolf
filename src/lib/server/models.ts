import mongoose from "mongoose";

const User_Schema = new mongoose.Schema({
  user: {
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    name: { type: String, require: true },
  },
  games: {
    id: { type: Number },
    state: {
      teams: { type: String },
      data: { type: Object },
    },
  },
});

export const User_Model = mongoose.model("User", User_Schema);
