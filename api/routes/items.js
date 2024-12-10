const express = require("express");
const router = express.Router();
const user2Copy = require('../model/user2');

// GET request to fetch all items
router.post("/", async (req, res) => {
    // const {name,password} = req.body
    const newUser = new user2Copy({
        name : req.body.name,
        password: req.body.password
    });

    newUser.save()
    .then(data=>res.status(200).json({message:"Signup user 2 Success"}))
    .catch(err=>res.status(400).json({message:"task failed successfully"}))
});

module.exports = router;
