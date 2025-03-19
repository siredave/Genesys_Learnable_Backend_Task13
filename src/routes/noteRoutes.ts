import express from "express";
import { getNotes, getNote, createNote, deleteNote, getNoteByCategory, updateNote} from "../controllers/noteControllers";

const router = express.Router();

router.get("/", getNotes);
router.get("/:id", getNote);
router.post("/", createNote);
router.delete("/:id", deleteNote);

router.get("/categories/:categoryId", getNoteByCategory)
router.get("/:id", updateNote)

export default router;