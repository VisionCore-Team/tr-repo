const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact.js")

router.post("/create", async (req, res) => {
    try {
        const datas = req.body;
        const newContact = new Contact(datas);
        await newContact.save();
        res.status(200).json({ return: "Request successully saved!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ return: "There is an error: " + error });
    }
})

module.exports = router;
