import express from "express";
import dotenv from "dotenv";
import router from "./routes/time.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use("/api/:date?", router)

app.listen(PORT, HOST, () => console.log(`Server running on ${HOST}:${PORT}`));