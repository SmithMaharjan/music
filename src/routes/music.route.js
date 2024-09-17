import express from "express";
import * as MusicControlled from "../controlled/music.js";

export const router = express.Router();
router.get("/getAllMovie", MusicControlled.getAllMovie);
router.get("/music/:id", MusicControlled.Music);
router.post("/addMusic",MusicControlled.musicAddition)
router.delete("/removeMusic/:id",MusicControlled.musicRemoval)
router.put("/updateMovie/:id",MusicControlled.musicUpdate)
