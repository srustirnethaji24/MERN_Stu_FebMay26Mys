const express = require("express");
const router = express.Router();

const {protect} = require("../middleware/auth.middleware");

// User booking route 
router.post("/",protect,(req,res)=>{
    res.send("Create boking");
});

module.exports = router;