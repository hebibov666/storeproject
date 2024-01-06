import mongoose, { Schema } from "mongoose";

const userModel = new Schema({
  username: String,
  email: String,
  password: String,
});

export const UserModel =
  mongoose.models.user || mongoose.model("user", userModel, "shopdb");
