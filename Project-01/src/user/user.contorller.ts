import { NextFunction, Request, Response } from "express";
import { getAdminUsersDB, getUserByIdDB, getUserDB, saveUserDB } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = req.body;
  const data = await saveUserDB(payload);
  res.status(200).json({
    status: "success",
    data,
  });
};

// get users
export const getUsers = async ( req: Request, res: Response, next: NextFunction) => {
  const data = await getUserDB();
  res.status(200).json({
    status: "success",
    data,
  });
}
// get user by id
export const getUserById = async ( req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const data = await getUserByIdDB(id);
  res.status(200).json({
    status: "success",
    data,
  });
}
// get admin user list
export const getAdminUsers = async ( req: Request, res: Response, next: NextFunction) => {
  const data = await getAdminUsersDB();
  res.status(200).json({
    status: "success",
    data, 
  });
}