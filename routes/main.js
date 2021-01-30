const express=require('express')
const router=new express.Router()


router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/check',(req,res)=>{
    res.render('check')
})

module.exports=router