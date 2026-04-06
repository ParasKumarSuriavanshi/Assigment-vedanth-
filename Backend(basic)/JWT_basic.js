const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const SECRET = "heymate"
app.use(express.json());


app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "paras" && password === "1234")
    {
        const token = jwt.sign({ username }, SECRET);

        return res.json({
            message: "Login successful",
            token: token
        });
    } 
    else 
    {
        return res.status(403).json({
            message: "Invalid credentials"
        });
    }
});

app.get("/profile",(req, res) => {
    try{
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                message: "Token missing"
            });
        }
        const decoded = jwt.verify(token, SECRET);
        const user = decoded.username;
        return res.json({
            message: "Welcome to your profile",
            user: user
        })
    }
    catch(err)
    {
        return res.status(403).json({
            message: "Invalid token"
        });
    }
    
})
app.listen(3000, () => {
    console.log("Server running on port 3000");
});