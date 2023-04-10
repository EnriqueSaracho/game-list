import express from "express";
import mongoose from "mongoose";
import { GameModel } from "../models/Games.js";

const router = express.Router();

// Home API (gets all games)
router.get("/", async (req, res) => {
  try {
    const response = await GameModel.find({});
    res.send(response);
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

export { router as gamesRouter };
