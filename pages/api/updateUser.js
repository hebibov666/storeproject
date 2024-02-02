/* 
  //* Info:  
    This API endpoint accepts POST requests to update user data.
    data=> payload = {
      newData: {
        username: value,
        email: value,
      }
    }
    It verifies the JWT token to authenticate the user.
    If the token is valid, it updates the user data, if provided.
    If the user data is updated successfully, it returns a 200 status code with a success message.
    If the token, or user is not valid, it returns a 401 unauthorized error or a 400 bad request error with a message.
*/

import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { DBUrl } from "@/lib/db";
import { UserModel } from "@/lib/models/user";
import { v2 } from "cloudinary";

const secret = process.env.JWT_SECRET;
const expirationTime = Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60; // jwt expire time

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Handle POST requests
    const jwtToken = req.cookies.jwtToken;
    // console.log(jwtToken);
    const { newData } = req.body;

    if (!jwtToken) {
      return res.status(400).json({ message: "JWT token missing" });
    }
    if (!newData) {
      return res.status(400).json({ message: "newData missing" });
    }

    try {
      const trimmedData = newData.trim();
      var parsedData = JSON.parse(trimmedData);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error Parsing newData; please send a Valid JSON" });
    }

    // console.log(parsedData);
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

      // Define allowed fields for updating user data
      const allowedFields = ["username", "email", "image"];

      // Filter newData to include only allowed fields and remove empty string values
      const sanitizedData = Object.keys(parsedData.newData)
        .filter(
          (key) => allowedFields.includes(key) && parsedData.newData[key] !== ""
        )
        .reduce((obj, key) => {
          obj[key] = parsedData.newData[key]; // Assign the value of the key from newData to the corresponding key in obj
          return obj; // Return the accumulated object
        }, {});

      // Is email valid??
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedData.email)) {
        return res
          .status(406)
          .json({ error: "Invalid email", message: "Email is not valid" });
      }

      // Check for uniqueness of email
      if (sanitizedData.email) {
        const existingEmail = await UserModel.findOne({
          email: sanitizedData.email,
          _id: { $ne: existingUser._id }, // Exclude current user
        });
        if (existingEmail) {
          return res
            .status(400)
            .json({ message: "Email already exists in the system" });
        }
      }

      // Check for uniqueness of username
      if (sanitizedData.username) {
        const existingUsername = await UserModel.findOne({
          username: sanitizedData.username,
          _id: { $ne: existingUser._id }, // Exclude current user
        });
        if (existingUsername) {
          return res
            .status(400)
            .json({ message: "Username already exists in the system" });
        }
      }

      if (sanitizedData.image) {
        await v2.uploader
          .upload(sanitizedData.image, {
            resource_type: "image",
            folder: "store",
          })
          .then((data) => {
            sanitizedData.image = data.url;
          })
          .catch((error) => {
            return res.status(500).json({
              error: "There was an error in uploading the image",
              message:
                "Internal server error, while uploading image. Please try again",
            });
          });
      }

      const updatedData = await UserModel.findByIdAndUpdate(
        existingUser._id,
        { ...sanitizedData },
        { new: true }
      );

      const cookieValue = jwt.sign(
        {
          username: updatedData.username,
          id: updatedData._id.toString(),
          exp: expirationTime,
        },
        process.env.JWT_SECRET,
        {
          algorithm: "RS512",
        }
      );

      return res.status(200).json({
        message: "User data updated successfully",
        data: {
          newToken: cookieValue,
          data: {
            name: updatedData.name,
            email: updatedData.email,
            image: updatedData.image,
          },
        },
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
