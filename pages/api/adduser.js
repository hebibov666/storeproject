/* 
  //* Info:  
    This api accept params in post request of username, email, and password;
    adds all the details to the users collection in the db;
    it validates the uniqueness of email and username;
    errors: comes with a error filed and a message filed where error is a brief
      info of the error and the message is a described error message 
*/

import { DBUrl } from "@/lib/db";
import { UserModel } from "@/lib/models/user";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { password, email, username } = req.body;

    if (
      password === "" ||
      email === "" ||
      username === "" ||
      !password ||
      !email ||
      !username
    ) {
      return res
        .status(406)
        .json({ error: "Invalid Data", message: "Data is not valid" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(406)
        .json({ error: "Invalid email", message: "Email is not valid" });
    }

    try {
      await mongoose.connect(DBUrl);

      // Check if the username or email already exists
      const existingUser = await UserModel.findOne({
        $or: [{ username }, { email }],
      });
      if (existingUser) {
        const existingField =
          existingUser.username === username ? "Username" : "Email";
        return res.status(409).json({
          error: "Duplicate data",
          message: `${existingField} is already in use`,
        });
      }

      // Create a new user instance
      const newUser = new UserModel({ username, email, password });

      // Save the user to MongoDB
      await newUser.save();

      res.status(200).json({ message: "User successfully created" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  } else {
    res.status(400).json({
      message: "Please send a POST request with Username, Email, Password",
    });
  }
}
