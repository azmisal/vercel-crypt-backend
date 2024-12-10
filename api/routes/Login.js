const express = require("express");
const router = express.Router();
const userCopy = require('../model/user');

router.post('/', (req, res) => {
    const {email,password} = req.body;
    userCopy.findOne({email,password})
    .then(user=>{
        if(user){
            res.status(200).json({message:"Login Successfull",user});
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