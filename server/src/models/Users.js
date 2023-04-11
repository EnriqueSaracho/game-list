import mongoose from "mongoose";
import { gamesRouter } from "../routes/games.js";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedGames: [{ type: mongoose.Schema.Types.ObjectId, ref: "games" }],
});

export const UserModel = new mongoose.model("users", UserSchema);
