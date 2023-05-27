import { Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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

userSchema.static("getAdminUsers", async function getAdminUsers(): Promise<
  IUser[]
> {
  const admin = await this.find({ role: "admin" }); 
  return admin;
});

userSchema.method("fullName", function fullName() {
  return (
    this.name.firstName + " " + this.name.middleName + " " + this.name.lastName
  );
});

// user model 
export const User = model<IUser, UserModel>("Users", userSchema);
