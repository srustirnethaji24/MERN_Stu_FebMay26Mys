//custom-middleware
const express=require("express");
const app =express();
//custom middleware
function checkAdminAccess(req,res,next){
    if(req.query.role=="admin"){
        return res.status(403).json({
            success:false,
            message:"Admin access denied"
        });
    }
    next();
}
app.get("/",function(req,res){
    res.send("home route");
});
app.get("/admin",checkAdminAccess,function(req,res){
    res.json({
        success:true,
        message:"Admin route accessed"
    });
});
app.listen(4001,function(){
    console.log("express server running at http://localhost:4000");
});