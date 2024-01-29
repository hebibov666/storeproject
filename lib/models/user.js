import mongoose, { Schema } from "mongoose";

const userModel = new Schema({
  username: String,
  email: String,
  password: String,
  image: String,
});

export const UserModel =
  mongoose.models.User || mongoose.model("User", userModel, "users");
