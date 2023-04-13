import express from "express";
import { GameModel } from "../models/Games.js";
import { UserModel } from "../models/Users.js";
import { verifyToken } from "./users.js";

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
router.post("/", verifyToken, async (req, res) => {
  const game = new GameModel(req.body);
  try {
    const response = await game.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

// Save a game API
router.put("/", verifyToken, async (req, res) => {
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
router.get("/savedGames/ids/:userID", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);
    res.json({ savedGames: user?.savedGames });
  } catch (err) {
    res.json(err);
  }
});

// Show saved games API
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

export { router as gamesRouter };
