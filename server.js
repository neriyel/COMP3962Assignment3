const express = require('express');
const path = require('path');

const app = express();
const PORT = 80; // Use port 80 for public access

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/home', (req, res) => res.sendFile(__dirname + '/home.html'));
app.get('/help', (req, res) => res.sendFile(__dirname + '/help.html'));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
