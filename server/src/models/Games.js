import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
  user: {
    type: String,
  },
  // status: {
  //   type: String,
  //   enum: ["not played", "in progress", "paused", "completed", "abandoned"],
  //   default: "not played",
  //   required: true,
  // },
  // genres: {
  //   type: [String],
  // },
  // platforms: {
  //   type: [String],
  // },
  // graphics: {
  //   characterDesign: {
  //     type: Number,
  //     min: 1,
  //     max: 5,
  //   },
  //   textures: {
  //     type: Number,
  //     min: 1,
  //     max: 5,
  //   },
  //   frames: {
  //     type: Number,
  //     min: 1,
  //     max: 5,
  //   },
  //   animations: {
  //     type: Number,
  //     min: 1,
  //     max: 5,
  //   },
  // },
  // world: {
  //   soundtrack: {
  //     type: Number,
  //     min: 1,
  //     max: 5,
  //   },
  //   worldBuilding: {
  //     type: Number,
  //     min: 1,
  //     max: 5,
  //   },
  //   lore: {
  //     type: Number,
  //     min: 1,
  //     max: 5,
  //   },
  //   attentionToDetail: {
  //     type: Number,
  //     min: 1,
  //     max: 5,
  //   },
  //   realism: {
  //     type: Number,
  //     min: 1,
  //     max: 5,
  //   },
  // },
  // gameplay: {
  //   progression: {
  //     type: Number,
  //     min: 1,
  //     max: 5,
  //   },
  //   satisfaction: {
  //     type: Number,
  //     min: 1,
  //     max: 5,
  //   },
  //   unrepetitiveness: {
  //     type: Number,
  //     min: 1,
  //     max: 5,
  //   },
  // },
  // story: {
  //   mainCharacter: {
  //     type: Number,
  //     min: 1,
  //     max: 5,
  //   },
  //   sideCharacters: {
  //     type: Number,
  //     min: 1,
  //     max: 5,
  //   },
  //   mainStory: {
  //     type: Number,
  //     min: 1,
  //     max: 5,
  //   },
  //   sideContent: {
  //     type: Number,
  //     min: 1,
  //     max: 5,
  //   },
  // },
});

export const GameModel = new mongoose.model("games", GameSchema);
