const express = require("express");
const router = express.Router();
const userCopy = require('../model/user');

// GET request to fetch all items
router.get("/items", async (req, res) => {
    try {
        const users = await userCopy.find(); // Fetch all documents in the collection
        res.status(200).json(users); // Send the data as JSON
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Failed to fetch data", error });
    }
});

module.exports = router;
