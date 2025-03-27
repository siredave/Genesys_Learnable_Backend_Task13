import {  Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthPayload } from "../models/interfaces";

declare global {
    namespace Express {
        interface Request {
            user?: AuthPayload;
        }
    }
}

const authMiddleware = (req:  Request, res: Response, next: NextFunction): void => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
        res.status(401).json({ message: "No token, authorization denied" });
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as AuthPayload;
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Token is not valid" });
    }
};

export default authMiddleware;