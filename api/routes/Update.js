const express = require("express");
const router = express.Router();
const userCopy = require('../model/user');

router.post('/',(req,res)=>{
    const email=req.body.email;
    const usdt=req.body.usdt;
    const btc=req.body.btc;
    const eth=req.body.eth;
    const xrp=req.body.xrp;
    const ltc=req.body.ltc;
    const ada=req.body.ada;
    userCopy.updateOne({email},{usdt:usdt,btc:btc,eth:eth,xrp:xrp,ltc:ltc,ada:ada})
    .then(user=>{
        if(user){
            res.status(200).json({message:"Update Successfull",user});
        }
        else{
            res.status(401).json({message:"Invalid Email or Password"});
        }
    })
    .catch(error=>{
        res.status(500).json({message: 'Internal Server Error : '+error});
    });
});

module.exports= router;