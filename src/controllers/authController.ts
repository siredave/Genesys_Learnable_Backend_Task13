import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel";
import { UserType, AuthPayload } from "../models/interfaces";

const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, email, password } = req.body as UserType;
        //Check if user already existing
        const checkExistingUser = await User.findOne({$or:[{username},{email}]})
        if(checkExistingUser){
            res.status(400).json({
                success: false,
                message: "User already exist, try with a different username"
            });
            return
        }
        // hash user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
        // create new user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        if(newUser){
        res.status(201).json({
            success: true,
            message: "User registered successfully" });
        }else{
            res.status(400).json({
                success: false,
                message: "User not registered, try again"
            });
        }


    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: "Server error" });
    }
};

const login = async (req: Request, res: Response): Promise<void> => {  
    try {
        const { email, password } = req.body as UserType;
            //Check if user already existing
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ 
                success: false,
                message: "User does not exist" });
            return;
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            res.status(400).json({ 
                success: false,
                message: "Invalid credentials" });
            return;
        }

        const payload: AuthPayload = { userId: user.id, username: user.username };
        if (!process.env.JWT_SECRET_KEY) {
            throw new Error("JWT_SECRET_KEY is not defined");
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
        res.status(200).json({ 
            success: true,
            message: "Logged in successfully",
            token 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: "Server error" });
    }
};

export { register, login };