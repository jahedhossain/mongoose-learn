import express from "express";
import cors from "cors";
// middleware
const app = express();
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
