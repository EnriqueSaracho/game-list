// Importing 'express' module.
import express from "express";

// Importing models.
import { GameModel } from "../models/Games.js";

// Object: router.
const router = express.Router();

// Route handler: Home API (gets all games).
router.get("/", async (req, res) => {
  try {
    const response = await GameModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

// Route handler: Add a game to the list.
router.post("/", async (req, res) => {
  // Creating new game in model.
  const game = new GameModel(req.body);
  // Saving the game.
  try {
    const response = await game.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

// Exporting router to index.js.
export { router as gamesRouter };
