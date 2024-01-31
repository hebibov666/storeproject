/* 
  //* Info:  
    This API endpoint accepts POST requests to delete a user.
    It verifies the JWT token to authenticate the user.
    It also checks if the provided password matches the user's password.
    If both the token and password are valid, it deletes the user from the database.
    If the user is successfully deleted, it returns a 200 status code with a success message.
    If the token, password, or user is not valid, it returns a 401 unauthorized error or a 400 bad request error with a message.
*/

import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { DBUrl } from "@/lib/db";
import { UserModel } from "@/lib/models/user";
import * as bcrypt from "bcrypt";

const secret = process.env.JWT_SECRET;

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Handle POST requests
    const jwtToken = req.headers.jwttoken;
    const { password } = req.body;
    // console.log(password);

    if (!jwtToken) {
      return res.status(400).json({ message: "JWT token missing" });
    }

    if (!password) {
      return res.status(400).json({ message: "Password is missing" });
    }

    try {
      // Verify the JWT token
      const decoded = jwt.verify(jwtToken, secret);

      // If verification succeeds, decoded contains the decoded payload
      console.log(decoded);

      // Check if the token is expired
      if (decoded.exp) {
        const currentTimestamp = Math.floor(Date.now() / 1000);
        if (currentTimestamp > decoded.exp) {
          // console.log("Token has expired.");
          return res.status(401).json({ message: "JWT token expired" });
        }
      }

      // Connect to the database
      await mongoose.connect(DBUrl);

      // Check if the username exists and the password matches
      const existingUser = await UserModel.findOne({
        username: decoded.username, // Assuming username is stored in the token
        _id: decoded.id,
      });

      // Throw an error if user doesn't exist or the id does not match
      if (!existingUser) {
        return res.status(401).json({ message: "Invalid JWT token" });
      }

      const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );

      // If user and password are valid, proceed to delete the user
      if (isPasswordCorrect) {
        await UserModel.findByIdAndDelete(existingUser._id);
        return res.status(200).json({ message: "User deleted successfully" });
      } else {
        // If user or password is invalid, return a 401 unauthorized error
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }
    } catch (error) {
      // If verification fails, an error is thrown
      console.error("JWT verification failed:", error);
      return res.status(401).json({ message: "Invalid JWT token" });
    }
  } else {
    // For non-POST requests, return a 400 status code with a message indicating only POST requests are allowed
    return res.status(400).json({ message: "Only POST requests allowed" });
  }
}
