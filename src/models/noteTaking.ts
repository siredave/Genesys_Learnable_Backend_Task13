import mongoose, { Schema, Document } from "mongoose";
import { Note, Category } from "../models/interfaces";

const CategorySchema: Schema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Category ID is required"],
  },
  name: {
    type: String,
    required: [true, "Category name is required"],
  },
});

const NoteSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxLength: [300, "Title cannot be more than 300 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
      maxLength: [500, "Content cannot be more than 500 characters"],
    },
    category: {
      type: CategorySchema,
      required: [true, "Category is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt & updatedAt
  }
);

const Note = mongoose.model<Note & Document>("Note", NoteSchema);
const Category = mongoose.model<Note & Document>("Category", CategorySchema);

export { Note, Category };
