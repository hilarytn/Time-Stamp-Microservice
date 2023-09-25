import express from "express";

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
    res.send('Welcome to this site!');
    console.log('The Landing Page endpoint has been hit!')
})
app.get("/home", (req, res) => {
    res.send('Welcome Home!');
    console.log('The Home Page endpoint has been hit!')
})

 app.listen (PORT, () =>console.log(`Server running on http://localhost:${PORT}`))