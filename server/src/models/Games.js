// Importing mongoose module to file.
import mongoose from "mongoose";

// Creating 'GameSchema' schema.
const GameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  franchise: {
    type: String,
  },
  publisher: {
    type: String,
  },
  releaseDate: {
    type: Date,
  },
  imageUrl: {
    type: String,
  },
  status: {
    type: String,
    default: "Not played",
    required: true,
  },
  genres: {
    type: [String],
  },
  platforms: {
    type: [String],
  },
  rating: {
    mainCharacter: {
      type: Number,
      min: 1,
      max: 5,
    },
    sideCharacters: {
      type: Number,
      min: 1,
      max: 5,
    },
    mainStory: {
      type: Number,
      min: 1,
      max: 5,
    },
    sideContent: {
      type: Number,
      min: 1,
      max: 5,
    },
    lore: {
      type: Number,
      min: 1,
      max: 5,
    },
    progression: {
      type: Number,
      min: 1,
      max: 5,
    },
    gameFeel: {
      type: Number,
      min: 1,
      max: 5,
    },
    variety: {
      type: Number,
      min: 1,
      max: 5,
    },
    replayability: {
      type: Number,
      min: 1,
      max: 5,
    },
    worldDesign: {
      type: Number,
      min: 1,
      max: 5,
    },
    characterDesign: {
      type: Number,
      min: 1,
      max: 5,
    },
    animations: {
      type: Number,
      min: 1,
      max: 5,
    },
    realism: {
      type: Number,
      min: 1,
      max: 5,
    },
    textures: {
      type: Number,
      min: 1,
      max: 5,
    },
    frames: {
      type: Number,
      min: 1,
      max: 5,
    },
    stability: {
      type: Number,
      min: 1,
      max: 5,
    },
    soundtrack: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
});

// Creating 'GameModel' for 'games' MongoDB collection, using 'GameSchema'.
export const GameModel = new mongoose.model("games", GameSchema);
