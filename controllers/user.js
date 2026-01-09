const User=require('../models/user');
const bcrypt=require('bcrypt');
const{setUser,getUser}=require('../auth');
function handleUserSignUp(req,res){
    return res.render("signUp",{error:null});
}
async function handlePostUserSignUp(req, res) {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: hashedPassword
        });
        return res.redirect('/login');
    } catch (error) {
        console.error(error); 
        let message = "Something went wrong. Please try again.";
        if (error.code === 11000) {
            message = "An account with this email already exists.";
        }
        return res.render("signUp", { error: message });
    }
}

async function handleUserLogin(req,res){
    return res.render("login",{error:null});
}

async function handlePostUserLogin(req,res){
    const{email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user)
        {
          return res.render("login", { error: "Incorrect username or password" });
        }
        const isMatch=bcrypt.compare(password,user.password);
        if (!isMatch) {
           return res.render("login", { error: "Invalid credentials" });
        }
        const token=setUser(user);
        res.cookie("uid",token,{httpOnly:true});
        return res.redirect("/url/home");
    }catch(error)
    {
        return res.render("login",{"error":error.message});
    }
    
}
function handleUserLogout(req,res){
  res.clearCookie('uid');
  res.redirect('/login');
}

module.exports={handleUserSignUp,handleUserLogin,handlePostUserLogin,handlePostUserSignUp,handleUserLogout};