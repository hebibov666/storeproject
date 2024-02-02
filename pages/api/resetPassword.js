/* 
  //* Info:  
    This API endpoint accepts POST requests to update password (oldPassword, newPassword).
    It verifies the JWT token to authenticate the user.
    If the token and password is valid, it updates the user password.
    If the user data is updated successfully, it returns a 200 status code with a success message.
    If the token, or user is not valid, it returns a 401 unauthorized error or a 400 bad request error with a message.
*/

import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { DBUrl } from "@/lib/db";
import { UserModel } from "@/lib/models/user";

const secret = process.env.JWT_SECRET;
const expirationTime = Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60; // jwt expire time

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Handle POST requests
    const jwtToken = req.headers.jwttoken;
    const { oldPassword, newPassword } = req.body;

    if (!jwtToken) {
      return res.status(400).json({ message: "JWT token missing" });
    }
    if (!oldPassword || !newPassword) {
      return res
        .status(400)
        .json({ message: "Old password or new password is missing" });
    }

    try {
      // Verify the JWT token
      const decoded = jwt.verify(jwtToken, secret);

      // Check if the token is expired
      if (decoded.exp) {
        const currentTimestamp = Math.floor(Date.now() / 1000);
        if (currentTimestamp > decoded.exp) {
          console.log("Token has expired.");
          return res.status(401).json({ message: "JWT token expired" });
        }
      }

      // Connect to the database
      await mongoose.connect(DBUrl);

      // Check if the username exists
      const existingUser = await UserModel.findOne({
        username: decoded.username, // Assuming username is stored in the token
        _id: decoded.id,
      });

      // Throw an error if user doesn't exist or the id does not match
      if (!existingUser) {
        return res.status(401).json({ message: "Invalid JWT token" });
      }

      const isPasswordCorrect = await bcrypt.compare(
        oldPassword,
        existingUser.password
      );

      if (!isPasswordCorrect) {
        return res.status(401).json({ message: "Password is not correct" });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      const updatedData = await UserModel.findByIdAndUpdate(
        existingUser._id,
        {
          password: hashedPassword,
        },
        { new: true }
      );

      return res.status(200).json({
        message: "Password updated successfully",
      });
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
