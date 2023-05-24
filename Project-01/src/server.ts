import express from "express";
import mongoose from "mongoose";
import app from "./app";

const port = 5000;


async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/ProjectOne");
    app.listen(port, () => {
      console.log(`App listening on port:http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main().catch((err) => console.log(err));


