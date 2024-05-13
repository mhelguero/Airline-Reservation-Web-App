const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const credentials = require('./credentials.json');

// Enable CORS for all requests
app.use(cors());

const connection = mysql.createConnection(credentials);

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        process.exit(1);
    }
    console.log('Connected to database');
});

// close connection when app terminated
process.on('SIGINT', () => {
    connection.end();
    process.exit();
});

const port = 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/all-flights', (req, res) => {
    connection.query('SELECT * FROM flights', (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            res.status(500).json({ error: 'Error querying database' });
            return;
        }
        res.json(results);
    });
});