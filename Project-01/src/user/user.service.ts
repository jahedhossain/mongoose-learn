import { IUser } from "./user.interface";
import { User } from "./user.model";

// save user to database
export const saveUserDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();
  return user;
};

export const getUserDB = async (): Promise<IUser[]> => {
  return await User.find();
};
