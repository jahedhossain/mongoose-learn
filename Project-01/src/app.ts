import express, { Application, Request, Response } from "express";
import cors from "cors";
import mongoose, { Schema, model } from "mongoose";
import router from "./user/user.route";

// middleware
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// users route
app.use("/api/user", router);

export default app;
