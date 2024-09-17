import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/database.js";
import { router as movieRouter } from "./src/routes/music.route.js";

dotenv.config();
connectDB();

const app = express();

app.use((req, res, next) => {
    if (req.method === "POST" || req.method === "PUT") {
        // Use express.json() to parse JSON bodies for POST/PUT requests
        return express.json()(req, res, next);
    }
    next(); // Skip JSON parsing for other methods (like GET)
});

app.use("/api", movieRouter);

export default app;
