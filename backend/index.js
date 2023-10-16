import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.get("/", (req, res) => {
    res.send('Welcome to this site!');
    console.log('The Landing Page endpoint has been hit!')
})
app.get("/api/:date?", (req, res) => {
        if (req.params.date) {
            const unixTime = new Date(req.params.date);
            res.json({
                unix : unixTime,
                utc: new Date(req.params.date)
            })
        }
    console.log('The Home Page endpoint has been hit!')
})

 app.listen (PORT, HOST, () =>console.log(`Server running on ${HOST}:${PORT}`))