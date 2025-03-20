import express from "express";
import { getNotes, getNote, createNote, deleteNote, getNoteByCategory, updateNote } from "../controllers/noteControllers";
import validateNote from "../middleware/validateNote";

const router = express.Router();

router.get("/", getNotes);
router.get("/:id", getNote);
router.post("/", validateNote, createNote); // validateNote middleware applied to POST
router.delete("/:id", deleteNote);
router.get("/categories/:categoryId", getNoteByCategory);
router.put("/:id", validateNote, updateNote); // validateNote middleware applied to PUT

export default router;