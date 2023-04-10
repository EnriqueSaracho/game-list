import express from "express";
import mongoose from "mongoose";
import { GameModel } from "../models/Games.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

// Home API (gets all games)
router.get("/", async (req, res) => {
  try {
    const response = await GameModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

// Add a game to the list
router.post("/", async (req, res) => {
  const game = new GameModel(req.body);
  try {
    const response = await game.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

// Save a game
router.put("/", async (req, res) => {
  try {
    const game = await GameModel.findById(req.body.gameID);
    const user = await UserModel.findById(req.body.userID);
    user.savedGames.push(game);
    await user.save();
    res.json({ savedGames: user.savedGames });
  } catch (err) {
    res.json(err);
  }
});

export { router as gamesRouter };
