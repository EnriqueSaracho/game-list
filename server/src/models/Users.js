// Importing mongoose module to file.
import mongoose from "mongoose";

// Importing 'gameRouter'.
import { gamesRouter } from "../routes/games.js";

// Creating 'UserSchema' schema.
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedGames: [{ type: mongoose.Schema.Types.ObjectId, ref: "games" }], // Field: from 'games' collection.
});

// Creating 'UserModel' for 'users' MongoDB collection, using 'UserSchema'.
export const UserModel = new mongoose.model("users", UserSchema);
