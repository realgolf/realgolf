import mongoose from "mongoose";
import { today } from "./utils";

const User_Schema = new mongoose.Schema({
  user: {
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    name: { type: String, require: true },
    measurement_units: { type: String, required: true, default: "meters" },
    theme: { type: String, required: true, default: "system" },
    handicap: { type: Number, required: true, default: 54 },
    handicap_updated: { type: Date, required: true, default: today },
  },
  games: [
    {
      id: { type: String },
      name: { type: String },
      teams: { type: String },
      date: { type: String },
      data: { type: String },
    },
  ],
  handicap_history: [
    {
      handicap: { type: Number },
      date: { type: Date },
    },
  ],
});

export const User_Model = mongoose.model("User", User_Schema);
