import cors from "cors";
import express, { Application } from "express";
import router from "./user/user.route";

// middleware
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// users route
app.use("/api/user", router);

export default app;
