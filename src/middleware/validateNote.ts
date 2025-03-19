import { Request, Response, NextFunction } from "express";
import { Note } from "../models/note";

const validateNote = (req: Request, res: Response, next: NextFunction) :void => {
    const { title, content, category } = req.body as Note;
    if (!title || !content || !category || !category.id || !category.name) {
        res.status(400).json({ message: "Invalid note format" });
        return;
    }
    next();
};

export default validateNote;