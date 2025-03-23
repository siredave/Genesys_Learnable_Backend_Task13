import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectToDb from "./database/db";
import noteRoutes from "./routes/noteRoutes";
import authRoutes from "./routes/authRoutes";
import errorHandler from "./middleware/errorHandler";
import authMiddleware from "./middleware/authMiddleware";
import logger from "./middleware/logger";

dotenv.config();

connectToDb();
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger); // Add logging middleware

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes",authMiddleware, noteRoutes);

// Error Handler Middleware
app.use(errorHandler);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Welcome to the note taking api");
});

app.get("/test", (req: express.Request, res: express.Response) => {
  res.send("This is a test page");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
