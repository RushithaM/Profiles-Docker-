const fs = require('fs');
const express = require('express');
const cors = require('cors');
const path = require('path');
const profiles = require('./data'); 

const app = express();
app.use(cors());

const logDirectory = path.join(__dirname, 'logs');

// Ensure logs directory exists
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

// Create a write stream (in append mode)
const logFileStream = fs.createWriteStream(path.join(logDirectory, 'requests.log'), { flags: 'a' });

// Middleware to log all requests
app.use((req, res, next) => {
    const port = process.env.PORT || 5000; 
    const log = `${new Date().toISOString()} ${req.method} ${req.url} served on port ${port}\n`;
    logFileStream.write(log); 
    console.log(log); 
    next();
});

// API route to serve profiles
app.get('/api/profiles', (req, res) => {
    res.json(profiles);
});

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
});
