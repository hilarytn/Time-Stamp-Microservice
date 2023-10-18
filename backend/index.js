import express from "express";
import dotenv from "dotenv";
import router from "./routes/time.js";
import path from 'path';

dotenv.config({ path: '../.env' });

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use("/api", router)



app.get("/", (req, res) => {
    res.render('index');
})

app.listen(PORT, HOST, () => console.log(`Server running on ${HOST}:${PORT}`));