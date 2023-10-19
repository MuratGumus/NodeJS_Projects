// npm i jsonwebtoken komutu ne işe yarar?

const express = require("express");
const app = express();
const jwt =require("jsonwebtoken")  // npm i jsonwebtoken - kimlik doğrulama için kullanılır
app.use(express.json());

const users = [
    {
        id: "1",
        username: "murat",
        password: "gumus",
        isAdmin: true,
    },
    {
        id: "2",
        username: "sebastian",
        password: "vettel",
        isAdmin: false,
    },
];
app.post("/api/login", (req, res) => {
    const {username,password} = req.body
    const user = users.find((u)=>{
        return u.username === username && u.password ===password
    })
    if (user) {
        // Generate and access token
        const accessToken = jwt.sign({id:user.id, isAdmin: user.isAdmin}, "mySecretKey")
        res.json({
            username:user.username,
            isAdmin:user.isAdmin,
            accessToken,
        })
    }else{
        res.status(400).json("Username or password incorrect")
    }
});



const verify = (req,res,next)=>{
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        
        jwt.verify(token, "mySecretKey", (err, user)=>{
            if (err) {
                return res.status(401).json("Token is not valid")
            }

            req.user=user
            next()
        })
    }else{
        res.status(401).json("You are not authenticated")
    }
}

app.delete("/api/users/:userid", verify, (req,res) =>{
    if (req.user.id ===req.params.userid || req.user.isAdmin) {
        req.status(200).json("User has been deleted")
    }else{
        res.status
        
    }
})
app.listen(5000, () => console.log("Backend server is running!"));
