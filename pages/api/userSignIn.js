/* 
  //* Info:  
    This api accept POST request with params username, and password;
    it verifies the password to the existing user with the same username
    If the password is same it returns a 200 status code with an object with message and
    data which contains email and username of the user and a JWT token
    if the password is wrong it returns a 401 unauthorized error
    all the errors are returned with error name and message;

    Todo: Check the hash password of the user!
*/

import { DBUrl } from "@/lib/db";
import { UserModel } from "@/lib/models/user";
import mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { password, username } = req.body;

    if (password === "" || username === "" || !password || !username) {
      return res
        .status(406)
        .json({ error: "Invalid Data", message: "Data is not valid" });
    }

    try {
      await mongoose.connect(DBUrl);

      // Check if the username or email already exists
      const existingUser = await UserModel.findOne({
        username: username,
      });

      if (!existingUser) {
        return res.status(404).json({
          error: "User not found",
          message: `Can not find User with username: ${username}`,
        });
      }

      const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!isPasswordCorrect) {
        return res.status(401).json({
          error: "Password is invalid",
          message: `Password for ${username} is not valid!`,
        });
      }

      if (!process.env.JWT_SECRET) {
        res.status(500).json({
          message: "JWT_SECRET is not defined in the .env file",
        });
      }
      const token = jwt.sign(
        {
          email: existingUser.email,
          username: existingUser.username,
          id: existingUser._id.toString(),
        },
        process.env.JWT_SECRET,
        {
          algorithm: "RS512",
        }
      );

      res.status(200).json({
        message: "User successfully verified",
        data: {
          email: existingUser.email,
          username: existingUser.username,
          image:existingUser.image,
          token: token,
        },
      });
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
