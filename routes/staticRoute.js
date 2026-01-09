const express=require('express');
const router=express.Router();
const {handleUserLogin,handleUserSignUp,handlePostUserSignUp,handlePostUserLogin,handleUserLogout}=require('../controllers/user');
router.get('/signup',handleUserSignUp);
router.get('/login',handleUserLogin);
router.get('/logout',handleUserLogout);
router.post('/login',handlePostUserLogin);
router.post('/signup',handlePostUserSignUp);

module.exports=router;