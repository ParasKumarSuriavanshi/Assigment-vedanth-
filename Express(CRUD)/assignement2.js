const express = require('express');
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Abhishek" },
  { id: 2, name: "Priya" }
];

app.get("/users",(req,res)=>{
    for(let i = 0 ; i < users.length ; i++)
    {
        res.status(200).send(users)
    }
})

app.post("/users",(req,res)=>{
    const id = req.body.id;
    const name = req.body.name;

    users.push({id: id,name: name});
    res.status(201).send("Added successfully");
})

app.put("/users/:id",(req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    for(let i = 0 ; i < users.length ; i++)
    {
        if(users[i].id == id)
        {
            users[i].name = name;
            res.status(200).send("Updated Successfuly");
        }
        else
        {
            res.status.apply(204).send("Cannot find the id")
        }
    }
})

app.delete("/users/:id",(req,res)=>{
    let newusers = [];
    const id = req.body.id;
    let found = false;
     for(let i = 0 ; i < users.length ; i++)
    {
        if(users[i].id != id)
        {
            newusers.push(users[i]);
        }
        else
        {
            found = true;
        }
    }
    if(found)
    {
        users = newusers;
        res.status(200).send("Deleted Successfully");
    }
    else{
        res.status(204).send("User not found");
    }
})

app.listen(3000);