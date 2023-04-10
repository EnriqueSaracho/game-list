import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";
config({ path: "./config.env" });

import { userRouter } from "./routes/users.js";
import { gamesRouter } from "./routes/games.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/games", gamesRouter);

const uri = process.env.URI;

mongoose.connect(uri);

app.listen(3001, () => console.log("SERVER STARTED"));
