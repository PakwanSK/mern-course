import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/", (req,res) => {});



app.listen(5000, () => {
    connectDB();
    console.log("Sever started at http://localhost:5000");
});

