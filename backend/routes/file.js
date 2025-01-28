const express = require("express");
const router = express.Router();
const File = require("../models/File.js")
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require("path");
const fs = require('fs');
const mime = require('mime-types');

router.use(cors())
router.use(bodyParser.json({ charset: 'utf-8', limit: '50mb' }));
router.use(express.static('public'));

const filePath = path.join(__dirname, '..', 'uploads');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Save files to uploads directory
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        res.json(req.file);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error." });
    }
});

// Save datas to mongoDB
router.post("/save", async (req, res) => {
    try {
        const data = req.body;
        const newInsert = new File(data);
        await newInsert.save();
        res.status(201).json({ ...newInsert, filename: newInsert.filename });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error." });
    }
})

// View File
router.get('/view/:filename', (req, res) => {
    const filename = req.params.filename;
    const fp = path.join(filePath, filename);
    const mimeType = mime.lookup(fp);
    fs.access(fp, fs.constants.F_OK, (err) => {
        if (err) {
            res.status(404).send('File not found.');
        } else {
            if (mimeType.startsWith('image/')) {
                res.setHeader('Content-Type', mimeType);
                res.sendFile(fp);
            } else if (mimeType === 'application/pdf') {
                res.setHeader('Content-Type', 'application/pdf');
                res.sendFile(fp);
            } else {
                res.status(400).send('Unsupported file type.');
            }
        }
    });
});

module.exports = router;