import { IUser } from "./user.interface";
import { User } from "./user.model";

// save user to database
export const saveUserDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();
  return user;
};

// all users
export const getUserDB = async (): Promise<IUser[]> => {
  return await User.find();
};

// user by id
export const getUserByIdDB = async (id: string): Promise<IUser | null> => {
  return await User.findOne({
    id: id,
  },{ 
    name: 1,
    email: 1,
  });
};