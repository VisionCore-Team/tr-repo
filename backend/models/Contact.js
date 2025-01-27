const mongoose = require("mongoose");

const ContactsSchema = mongoose.Schema({
    contactName: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true },
    contactTopic: { type: String, required: true },
    contactMessage: { type: String, required: true },
    contactFile: { type: String, required: false}
}, { timestamps: true })


const Contacts = mongoose.model("Contacts", ContactsSchema);
module.exports = Contacts;