/* 
  //* Info:  
    This API endpoint accepts GET requests with a JWT token in the request cookies.
    It verifies the JWT token to authenticate the user.
    If the token is valid, it retrieves user data based on the decoded username from the token.
    If the user is found in the database, it returns a 200 status code with an object containing user data.
    If the user is not found or the JWT token is invalid or expired, it returns a 401 unauthorized error.
    All errors are returned with a message.
*/

const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
import { DBUrl } from "@/lib/db";
import { UserModel } from "@/lib/models/user";

const secret = process.env.JWT_SECRET;

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET requests
    const jwtToken = req.cookies.jwtToken;

    if (!jwtToken) {
      return res.status(400).json({ message: "JWT token missing" });
    }

    try {
      // Verify the JWT token
      const decoded = jwt.verify(jwtToken, secret);

      // Check if the token is expired
      if (decoded.exp) {
        const currentTimestamp = Math.floor(Date.now() / 1000);
        if (currentTimestamp > decoded.exp) {
          // console.log("Token has expired.");
          return res.status(401).json({ message: "JWT token expired" });
        }
      }

      // Proceed with handling the GET request logic
      await mongoose.connect(DBUrl); // Connect to the database

      // Check if the username or email already exists
      const existingUser = await UserModel.findOne({
        username: decoded.username, // Assuming username is stored in the token
        _id: decoded.id,
      });

      // Throw an error if user doesn't exist or the id does not match
      if (!existingUser) {
        return res.status(401).json({ message: "Invalid JWT token" });
      }

      // Return the existing user data
      return res.status(200).json({ existingUser });
    } catch (error) {
      // If verification fails, an error is thrown
      console.error("JWT verification failed:", error);
      return res.status(401).json({ message: "Invalid JWT token" });
    }
  } else {
    // For non-GET requests, return a 400 status code with a message indicating only GET requests are allowed
    return res.status(400).json({ message: "Only GET requests allowed" });
  }
}
