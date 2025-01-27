const express = require("express");
const router = express.Router();

// Routes start
const contactRoute = require('./contact.js')
const fileRoute = require('./file.js')
// Routes end


// Paths start
router.use("/contact", contactRoute);
// Paths end


module.exports = router;