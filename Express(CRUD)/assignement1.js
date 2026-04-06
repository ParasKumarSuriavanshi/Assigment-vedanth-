const express = require('express');
const app = express();

app.get("/hello",(req,res)=>{
    res.json({
        message: "Hello World of Express!"
    })
})

app.listen(3000,(req,res)=>{
    console.log("Server on port 3000")
});