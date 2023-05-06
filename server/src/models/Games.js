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
  developer: {
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
    },
    sideCharacters: {
      type: Number,
    },
    mainStory: {
      type: Number,
    },
    sideContent: {
      type: Number,
    },
    cutscenes: {
      type: Number,
    },
    lore: {
      type: Number,
    },
    progression: {
      type: Number,
    },
    gameFeel: {
      type: Number,
    },
    variety: {
      type: Number,
    },
    replayability: {
      type: Number,
    },
    worldDesign: {
      type: Number,
    },
    characterDesign: {
      type: Number,
    },
    animations: {
      type: Number,
    },
    realism: {
      type: Number,
    },
    graphics: {
      type: Number,
    },
    stability: {
      type: Number,
    },
    soundtrack: {
      type: Number,
    },
  },
});

// Creating 'GameModel' for 'games' MongoDB collection, using 'GameSchema'.
export const GameModel = new mongoose.model("games", GameSchema);
