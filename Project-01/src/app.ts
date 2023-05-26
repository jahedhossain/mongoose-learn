import express, { Application, Request, Response } from "express";
import cors from "cors";
import mongoose, { Schema, model } from "mongoose";

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
app.get("/user", (req: Request, res: Response) => {
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
    gender: "male" | "femalee";
    emergencyContact: string;
    presentAddress: string;
    permanentAddress: string;
  }
  // userSchema
  const userSchema = new Schema<IUser>({
    id: { type: Number, required: true, unique: true },
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
  const User = model<IUser>("Users", userSchema);

  // create user
  const user = new User({
    id: "278588",
    role: "student",
    name: {
      firstName: "jahede",
      middleName: "hasan",
      lastName: "jahed",
    },
    email: "jahed.w.dev@gmail.com",
    password: "123456",
    dateOfBirth: "1998-12-12",
    gender: "female",
    emergencyContact: "01700000000",
    presentAddress: "Dhaka, Bangladesh",
    // permanentAddress: "Dhaka, Bangladesh",
  });

  // save user to database
  const saveUser = async () => {
    try {
      const result = await user.save();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  saveUser();
});

export default app;
