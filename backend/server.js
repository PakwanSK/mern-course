import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/product.route.js";

dotenv.config();

const app = express();


app.use(express.json()); // accept JSON data in the rq.body

app.use("/api/products", productRoute); // use the product route


app.listen(5000, () => {
    connectDB();
    console.log("Sever started at http://localhost:5000");
});

