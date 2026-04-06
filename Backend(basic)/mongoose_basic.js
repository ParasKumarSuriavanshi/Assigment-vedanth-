const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json())

mongoose.connect('mongodb_URL');

const shema =  new mongoose.Schema({
    user: String,
    mail: String
})

const user = mongoose.model("user",shema);

app.post("/register",async (req,res)=>{
    const username = req.body.username;
    const mail = req.body.mail;

    await user.create({user: username,mail})
    res.send("User created")
})

app.get("/users",async (req,res)=>{
    const a = await user.find();
    res.json(a)
})

app.listen(3000);