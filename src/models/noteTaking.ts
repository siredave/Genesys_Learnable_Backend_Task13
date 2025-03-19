import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Category ID is required"],
  },
  name: {
    type: String,
    required: [true, "Category name is required"],
  },
});


const NoteSchema = new mongoose.Schema(
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
  },
  {
    timestamps: true, // Automatically adds createdAt & updatedAt
  }
);

const Note = mongoose.model("Note", NoteSchema);
const Category = mongoose.model("Category", CategorySchema);

export { Note, Category };
