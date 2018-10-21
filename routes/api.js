const express=require('express');
const router=express.Router()

//Demo
router.get('/demo',(req,res,next)=>{
    res.send('demo');
})

module.exports=router;