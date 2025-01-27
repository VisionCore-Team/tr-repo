const mongoose = require('mongoose');

const FilesSchema = new mongoose.Schema({
    destination: { type: String },
    encoding: { type: String },
    fieldname: { type: String },
    filename: { type: String },
    mimetype: { type: String },
    originalname: { type: String },
    path: { type: String },
    size: { type: Number },
}, { timestamps: true });

const Files = mongoose.model('Files', FilesSchema);
module.exports = Files;

