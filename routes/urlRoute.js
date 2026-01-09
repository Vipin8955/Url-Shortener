const express=require('express');
const mongoose=require('mongoose');
const Url=require('../models/url');
const router=express.Router();
const{restrictToLoggedInUserOnly}=require('../middlewares/auth');
const{handleGetHome,handlePostShortUrl,handleDeleteUrl}=require('../controllers/url');
router.get('/home',restrictToLoggedInUserOnly,handleGetHome);
router.post('/shorturl',restrictToLoggedInUserOnly,handlePostShortUrl);
router.get('/:id',async (req,res)=>{
    const shortId=req.params.id;
    const entry=await Url.findOneAndUpdate({shortId:shortId},{
        $push:{
            visitHistory:{timestamp:Date.now()},
       }
    });
    return res.redirect(entry.redirectUrl);
})
router.post('/delete/:id',restrictToLoggedInUserOnly,handleDeleteUrl);
module.exports=router;