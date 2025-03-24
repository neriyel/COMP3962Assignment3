const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Change from 80 to 3000

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/home', (req, res) => res.sendFile(__dirname + '/home.html'));
app.get('/help', (req, res) => res.sendFile(__dirname + '/help.html'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
