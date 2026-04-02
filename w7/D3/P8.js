//JWT flow with login, refresh-style login ans secure verification

const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();
app.use(express.json());

const secretKey = "Mysecretekey";
const refreshSecretKey = "MyNewsecretekey";

//in memeory storage for refresh token
const refreshTokens = [];
//authenticate access token
function authentiacateAccessToken(req,res,next){
    const authHeader = req.headers.authorisation;
    
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Bearer token is missing."
        });
    }
    try{
        req.user = jwt.verify(token,secretKey,{
            algorithm:["HS256"],
            issuer:"jwt-example"
        });
        next();
    }
    catch(error){
        if(error.name === "TokenExpiredError"){
            return res.status(401).json({
                success: false,
                message: "Access token has expired."
            });
        }
        return res.status(401).json({
            success: false,
            message: "Access token is invalid."
        });
    }
}

//Post function used login
app.post("/login",function(req,res){
    const {email,password} = req.body;
    if(email!=="email@email.com" || password!=="pass@123"){
        return res.status(401).json({
            success:false,
            message:"Invalid Credentials"
        });
    }
    const accessToken = jwt.sign({
        userId:101,
        email:email,
        role:"member"
    },secretKey,{expiresIn:"10m",algorithm:"HS256",issuer:"jwt-example"});

    const refreshToken = jwt.sign({
        userId:101,
        email:email
    },refreshSecretKey,
    {
        expiresIn:"10d",//d:days m:min h:hour
        algorithm:"HS256",
        issuer:"jwt-example"
    });
    refreshTokens.push(refreshToken);
    res.json({
        success:true,
        message:"login successful",
        accessToken:refreshToken
    });
});

app.post("/refresh",function(req,res){
    const {refreshToken} = req.body;
    if(!refreshToken || !refreshTokens.includes(refreshToken)){
        return res.status(401).json({
            success:false,
            message:"Refresh token is missing or invalid"
        });
    }
    try{
        const decoded = jwt.verify(refreshToken,refreshSecretKey,{
            algorithm:"HS256",
            issuer:"jwt-example"
        });
        const newAccessToken = jwt.sign({
            userId:decoded.userId,
            email:decoded.email,
            role:"member"
        },secretKey,{
            expiresIn:"10d",//d:days m:min h:hour
            algorithm:"HS256",
            issuer:"jwt-example"
        });
        res.json({
            success:true,
            accessToken:newAccessToken
        });
    }
    catch(error){
        res.status(403).json({
            success:false,
            message:"Refresh token verification failed."
        });
    }
});
app.get("/me",authentiacateAccessToken,function(req,res){
    res.json({
        success:true,
        message:"Protected user route",
        user:req.user
    });
});

app.listen(4000,function(){
    console.log("JWT demo server running @ http://localhost:4000");
});
//curl -X POST http://localhost:4000/login -H "Content-Type: application/json" -d "{\"email\":\"email@email.com\",\"password\":\"pass@123\"}"