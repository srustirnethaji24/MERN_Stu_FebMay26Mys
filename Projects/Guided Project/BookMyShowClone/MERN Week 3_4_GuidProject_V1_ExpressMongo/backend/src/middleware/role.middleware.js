//  Role middleware :RBAC
exports.authorize = (...roles)=>{
    console.log("roles :",roles);
    
    return(req,res,next)=>{
        console.log("Req User : ",req.user);
        
        if(!req.user || !roles.includes(req.user.role)){
              return res.status(403).json({
                success: false,
                message:"Access denied: insufficient permission",
            });
        }
        next();
    };
};