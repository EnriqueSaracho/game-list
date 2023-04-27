// Importing 'express' module.
import express from "express";

// Importing models.
import { GameModel } from "../models/Games.js";
import { UserModel } from "../models/Users.js";

// Importing 'verifyToken' function.
import { verifyToken } from "./users.js";

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

// Route handler: Save a game API.
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

// Route handler: Show ids of saved games API.
router.get("/savedGames/ids/:userID", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    res.json({ savedGames: user?.savedGames });
  } catch (err) {
    res.json(err);
  }
});

// Route handler: Show saved games API.
router.get("/savedGames/:userID", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    const savedGames = await GameModel.find({
      _id: { $in: user.savedGames },
    });
    res.json({ savedGames });
  } catch (err) {
    res.json(err);
  }
});

// Exporting router to index.js.
export { router as gamesRouter };
