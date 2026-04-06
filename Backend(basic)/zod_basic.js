const express = require('express');
const app = express();
const zod = require('zod');

app.use(express.json());

const check = zod.object({
    name: zod.string(),
    password: zod.string().min(8),
    email: zod.email()
})

app.get("/user",(req,res)=>{
    const z = check.safeParse(req.body);

    if(!z.success)
    {
        res.status(403).send("Invlid input");
    }

    const name = z.data.name;
    const password = z.data.password;
    const email = z.data.email;

    res.status(200).send("User data valid");


})

app.listen(3000,(req,res)=>
{
    console.log("Server running on port 3000");
})