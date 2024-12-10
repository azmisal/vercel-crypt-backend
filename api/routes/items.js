const express = require("express");
const router = express.Router();
const userCopy = require('../model/user');

// GET request to fetch all items
router.post("/", async (req, res) => {
    const strings = req.body
    try {
        // const users = await userCopy.find(); // Fetch all documents in the collection
        res.send(strings); // Send the data as JSON
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Failed to fetch data", error });
    }
});

module.exports = router;
