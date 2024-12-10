const express = require("express");
const router = express.Router();
const userCopy = require('../model/user');


router.post('/', (req, res) => {
    const email = req.body.email;
  
    userCopy.findOne({ email })
      .then(user => {
        if (user) {
          res.status(200).json({ message: "Wallet", user });
        } else {
          res.status(401).json({ message: "User wallet not Registered" });
        }
      })
      .catch(error => {
        res.status(500).json({ message: "Internal Server Error: " + error });
      });
  });


module.exports= router;