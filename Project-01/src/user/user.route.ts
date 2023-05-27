import express from "express";
import { createUser, getAdminUsers, getUserById, getUsers } from "./user.contorller";
const router = express.Router();
router.post("/create-user", createUser);
router.get("/", getUsers);
router.get("/admin", getAdminUsers);
router.get("/:id", getUserById);

export default router;
 