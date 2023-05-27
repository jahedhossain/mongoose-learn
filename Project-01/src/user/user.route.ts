import express from "express";
import { createUser, getUserById, getUsers } from "./user.contorller";
const router = express.Router();
router.post("/create-user", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);

export default router;
