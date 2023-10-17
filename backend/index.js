import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.get("/", (req, res) => {
    res.send('Welcome to this site!');
    console.log('The Landing Page endpoint has been hit!')
});

app.get("/api/:date?", (req, res) => {
    let dateToParse = req.params.date;
    
    if (!dateToParse) {
        let noDateUnix = new Date();
        res.json({
            unix:  Math.ceil(noDateUnix.getTime() / 1000),
            utc: noDateUnix.toUTCString()
        });
    } else {
        let newDate = new Date(parseInt(dateToParse));
        let unixDate = parseInt(dateToParse);

        if (newDate.toString() === "Invalid Date") {
            res.json({ error: "Invalid Date" });
        } else {
            let utcDate = newDate.toUTCString();
            res.json({
                unix: unixDate,
                utc: utcDate
            });
        }
    }
});

app.listen(PORT, HOST, () => console.log(`Server running on ${HOST}:${PORT}`));