import { HydratedDocument, Model } from "mongoose";

export interface IUser {
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

export interface IUserMethods {
  fullName(): string;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}

