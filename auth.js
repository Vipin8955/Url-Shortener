const jwt=require('jsonwebtoken');
const User=require('./models/user');
function setUser(user){
    return jwt.sign({
        _id:user._id,
        name:user.name,
    },process.env.SECRET);
}
function getUser(token){
    if (!token) return null;
    return jwt.verify(token,process.env.SECRET);
}

module.exports={setUser,getUser};