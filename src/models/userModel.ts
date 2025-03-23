import mongoose, { Schema, Document } from "mongoose";
import { UserType } from "../models/interfaces";

const userSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model<UserType & Document>("User", userSchema);
export default User;