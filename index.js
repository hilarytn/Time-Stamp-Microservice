import express from "express";
import dotenv from "dotenv";
import router from "./routes/time.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use("/api", router)



app.get("/", (req, res) => {
    const host =  `${HOST}:${PORT}`;
    res.render('index', {host: host});
})

app.listen(PORT, HOST, () => console.log(`Server running on ${HOST}:${PORT}`));