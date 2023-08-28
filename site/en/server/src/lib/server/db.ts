import { SECRET_MONGODB_CONNECTION } from "$env/static/private";
import mongoose from "mongoose";

const database_URI = SECRET_MONGODB_CONNECTION;

export async function connect_to_db() {
  try {
    return await mongoose.connect(database_URI);
  } catch (err) {
    console.log(err);
  }
}
