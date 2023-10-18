import express from "express";
import dotenv from "dotenv";
import router from "./routes/time.js";
import path from 'path';

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.set('view engine', 'ejs')
app.use("/api", router)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
})

app.listen(PORT, HOST, () => console.log(`Server running on ${HOST}:${PORT}`));