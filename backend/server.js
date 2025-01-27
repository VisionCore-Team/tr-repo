
// VISION CORE BACKEND STARTUP FILE

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 3000;
const mainRoute = require('./routes/index.js')
const fileRoute = require('./routes/file.js')
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json({limit: '50mb'}));  // Important for body request!

// Connect mongoDB
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(" Connected MongoDb");
        console.log('')
        console.log('##################################')
    } 
    catch (error) {throw error;}
}

// Allow all origin (http, https...)
const corsOptions = {
    origin: '*',
    credentials: true,
};

// End requests if api request headers doesn't includes our x-api-key value
const authMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).end();
    }
    next();
};

app.use(cors(corsOptions));
app.use("/api", authMiddleware, mainRoute);
app.use("/file", fileRoute);

app.listen(port, () => {
    console.log('##################################')
    console.log('')
    console.log(' VISIONCORE BACKEND STARTED')
    console.log(` PORT: ${port}`);
    console.log('')
    connect();
})
