import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

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
  export const User = model<IUser>("Users", userSchema);

  