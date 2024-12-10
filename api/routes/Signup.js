const express = require("express");
const router = express.Router();
const userCopy = require('../model/user');

router.post('/', (req, res) => {
    const userSigning = new userCopy({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        usdt:100,btc:0,eth:0,xrp:0,
        ltc:0,ada:0
    });
    userSigning.save()
        .then(data => {
            res.status(200).json({ message: "Signup Successfull" })
        })
        .catch(error => {
            response.status(400).json({ message: 'Submission failed due to invalid credentials' });
        });
});


module.exports= router;