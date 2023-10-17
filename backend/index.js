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
    try {
        if (req.params.date) {
            const rawDate = req.params.date;
            const strToInt = parseInt(rawDate);
            const utcTime = new Date(strToInt);
           if (utcTime instanceof Date) {
                res.json({
                    unix: utcTime * 1000,
                    utc: utcTime.toUTCString()
                })
            }
    }}catch (error) {
        res.json({ error : "Invalid Date" })  
    })
 
    res.json({
        unix: Date.now(),
        utc: new Date()
    })
        //}
    console.log('The Home Page endpoint has been hit!')

 app.listen (PORT, HOST, () => console.log(`Server running on ${HOST}:${PORT}`))