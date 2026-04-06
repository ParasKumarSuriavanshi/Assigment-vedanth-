const express = require('express');
const app = express();

app.use(express.json());

function middleware(req,res,next)
{
    const name = req.body.name;
    if(name != "Paras")
    {
        console.log("Not Authorized to visit ;(");
    }
    else
    {
    next();
    }
}

app.get("/welcome",middleware,(req,res)=>{
    console.log("Hello from Express!");
})

app.listen(3000);