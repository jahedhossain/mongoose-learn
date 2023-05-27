import { NextFunction, Request, Response } from "express";
import { getUserDB, saveUserDB } from "./user.service";

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