import express from "express";
import { createUser, getUsers } from "./user.contorller";
const router = express.Router();
router.post("/create-user", createUser);
router.get("/", getUsers);

export default router;
