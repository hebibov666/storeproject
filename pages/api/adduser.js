/* 
  //* Info:  
    This api accept POST request with params in post request of username, email, and password;
    adds all the details to the users collection in the db;
    it validates the uniqueness of email and username;
    errors: comes with a error filed and a message filed where error is a brief
      info of the error and the message is a described error message 

    Todo: Upload the user profile photo to cloud and store hash password!

*/

import { DBUrl } from "@/lib/db";
import { UserModel } from "@/lib/models/user";
import mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import { v2 } from "cloudinary";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { password, email, username, file } = req.body;
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

    let url;

    if (file) {
      await v2.uploader
        .upload(file, {
          resource_type: "image",
          folder: "store",
        })
        .then((data) => {
          url = data.url;
        })
        .catch((error) => {
          return res.status(500).json({
            error: "There was an error in uploading the image",
            message:
              "Internal server error, while uploading image. Please try again",
          });
        });
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

      const passwordSalt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, passwordSalt);

      // Create a new user instance

      const newUser = new UserModel({
        username,
        email,
        password: hash,
        image: url
          ? url
          : "https://res.cloudinary.com/dlnk5nlea/image/upload/v1706539882/y1no7nwjaqdo6oi2vdxe.jpg",
      });
      await newUser.save();

      res.status(200).json({ message: "User successfully created" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Database connection error", error: error.message });
    }
  } else {
    res.status(400).json({
      message: "Please send a POST request with Username, Email, Password",
    });
  }
}
