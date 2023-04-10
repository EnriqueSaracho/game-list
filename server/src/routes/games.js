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

// Save a game API
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

// Show ids of saved games API
router.get("/savedGames/ids", async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userID);
    res.json({ savedGames: user?.savedGames });
  } catch (err) {
    res.json(err);
  }
});

// Show saved games API
router.get("/savedGames", async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userID);
    const savedGames = await GameModel.find({
      _id: { $in: user.savedGames },
    });
    res.json({ savedGames });
  } catch (err) {
    res.json(err);
  }
});

export { router as gamesRouter };
