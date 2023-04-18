// Importing modules.
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Importing 'UserModel'.
import { UserModel } from "../models/Users.js";

// Object: router.
const router = express.Router();

// Route handler: Register API endpoint
router.post("/register", async (req, res) => {
  // Fields destructured from request body.
  const { username, password } = req.body;

  // Check if 'username' already exist in database.
  const user = await UserModel.findOne({ username });
  if (user) {
    return res.json({ message: "User already exists!" });
  }

  // Hashing 'password' with bcrypt.
  const hashedPassword = await bcrypt.hash(password, 10);

  // Creating Object and saving it to the database.
  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();

  res.json({ message: "User Registered Successfully!" });
});

// Login API endpoint
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.json({ message: "User Doesn't Exist" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    res.json({ message: "Username or Password is Incorrect!" });
  }

  // .env Key: secret key from the .env file (to be assigned to the token)
  const secret = process.env.secret;

  // token
  const token = jwt.sign({ id: user._id }, secret);
  res.json({ token, userID: user._id });
});

router.post("/login");

export { router as userRouter };

// Function: exported to the games route, is used in every request that requires being logged in.
export const verifyToken = (req, res, next) => {
  // .env Key: secret key from the .env file
  const secret = process.env.secret;

  // token: from the req headers
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err) => {
      if (err) {
        console.log(err);
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
