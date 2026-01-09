const{getUser}=require('../auth');
function restrictToLoggedInUserOnly(req,res,next){
    const user=getUser(req.cookies?.uid);
    if(!user)
    {
        return res.redirect("/login");
    }
    req.user=user;
    next();
}

module.exports={restrictToLoggedInUserOnly};