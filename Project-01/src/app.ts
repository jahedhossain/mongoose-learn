import express, { Application, Request, Response } from "express";
import cors from "cors";
import mongoose, { Schema } from "mongoose";

// middleware
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// user create api
app.post("/user", (req: Request, res: Response) => {
  // interface IUser
  interface IUser {
    id: number;
    role: "student";
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    email?: string;
    password: string;
    dateOfBirth: string;
    gender: "male" | "female";
    emergencyContact: string;
    presentAddress: string;
    permanentAddress: string;
  }
  // userSchema
  const userSchema = new Schema<IUser>({
    id: { type: Number, required: true },
    role: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    email: { type: String },
    password: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, required: true, enum: ["male", "female"] },
    emergencyContact: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
  });
  // user model
  const User = mongoose.model<IUser>("User", userSchema);
});

export default app;
