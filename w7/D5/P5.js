// Assiging roles to users and restricting access
const express = require("express");
const app = express();

app.use(function (req, res, nest) {
    req.user = { id: 101, username: "Srusti", role: "admin" };
    nest();
});

function requireRole(role) {
    return function (req, res, next) {
        if (!req.user) {
            return res.status(401).json({success: false, message: "Authentication required."});
        }
        if (req.user.role!== role) {
            return res.status(401).json({success: false, message: "Insuficient permission."});
        }
        next();
    }
}
app.get("/profile",function(req,res){
    res.json({success:true, message:"Profile page",user:req.user});
});

app.get("/admin",requireRole("admin"),function(req,res){
    res.json({success:true, message:"Admin page",user:req.user});
});

app.listen(4000, function () {
    console.log("Express-session demo server running @ http://localhost:4000");
});