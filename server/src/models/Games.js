import mongoose from "mongoose";

const GameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    status: {
      type: String,
      enum: ["not played", "in progress", "paused", "completed", "abandoned"],
      default: "not played",
      required: true,
    },
    releaseDate: {
      type: Date,
    },
    publisher: {
      type: String,
    },
    genres: {
      type: [String],
    },
    platforms: {
      type: [String],
    },
    graphics: {
      type: Number,
      min: 1,
      max: 5,
    },
    world: {
      type: Number,
      min: 1,
      max: 5,
    },
    gameplay: {
      type: Number,
      min: 1,
      max: 5,
    },
    story: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

GameSchema.virtual("rating").get(() => {
  if (!this.graphics || !this.world || !this.gameplay || !this.story) {
    return null;
  }
  const total = this.graphics + this.world + this.gameplay + this.story;
  return Math.round(total / 4);
});

export const GameModel = new mongoose.model("games", GameSchema);
