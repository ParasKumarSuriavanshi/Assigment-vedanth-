const express = require('express');
const app = express();

app.get('/success', (req, res) => {
    res.status(200).send("Everything fine");
});

app.get('/created', (req, res) => {
    res.status(201).send("User created");
});

app.get('/forbidden', (req, res) => {
    res.status(403).send("You cannot access this resource");
});

app.get('/error', (req, res) => {
    res.status(500).send("Something went wrong");
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});