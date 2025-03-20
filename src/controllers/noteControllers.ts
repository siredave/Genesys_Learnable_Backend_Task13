import { Note } from "../models/noteTaking";
import { Request, Response } from "express";

export const getNotes = async (req: Request, res: Response): Promise<void> => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Server error" 
    });
  }
};

export const getNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).json({ 
        success: false,
        message: "Note not found" 
      });
      return;
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Server error" 
    });
  }
};

export const createNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content, category } = req.body;
    const newNote = new Note({ title, content, category });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Server error" 
    });
  }
};

export const deleteNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      res.status(404).json({ 
        success: false,
        message: "Note not found" 
      });
      return;
    }
    res.status(200).json({ 
      success: true,
      message: "Note deleted" 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Server error" 
    });
  }
};

export const getNoteByCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const notes = await Note.find({ "category.id": req.params.categoryId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Server error" 
    });
  }
};

export const updateNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!note) {
      res.status(404).json({ 
        success: false,
        message: "Note not found" 
      });
      return;
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Server error" 
    });
  }
};