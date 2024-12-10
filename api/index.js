const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const app = express();

// Enable CORS for http://localhost:3000
app.use(cors());


// Middleware to parse JSON
app.use(express.json());


//MongoDB connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("Database Connected"))
.catch((err)=> console.error("Failed to connect DB",err))


// Import routes
const hiiRoute = require("./routes/hii");
const signupRoute = require("./routes/Signup");
const loginRoute = require("./routes/Login")
const walletRoute = require("./routes/Wallet")
const updateRoute = require("./routes/Update")
const itemsRoute = require("./routes/items")


// Base route
app.get("/", (req, res) => res.send("Express on Vercel"));

// Use routes
app.use("/hii", hiiRoute);
app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/wallet", walletRoute);
app.use("/update", updateRoute);
app.use("/items", itemsRoute);



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });// Export the app
module.exports = app;
