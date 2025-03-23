import { Request } from "express";

export interface CustomRequest extends Request {
  user?: AuthPayload;
}

export interface Category {
  id: string;
  name: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  category: Category; // Add category field
}


export interface UserType {
  id: string;
  username: string;
  email: string;
  password: string;
}

export interface AuthPayload {
  userId: string;
  username: string;
}