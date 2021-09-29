'use strict';

const express = require('express');
const fs = require('fs');
const app = express();
const port = 8042;

app.get('/app.html', (req, res) => {
    fs.readFile('app.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Content-Length', data.length);
        res.send(data);
    });
})
app.get('/exercise2.js', (req, res) => {
    fs.readFile('exercise2.js', (err, data) => {
        res.send(data);
    });
})

const port = process.env.port || 8042;


app.listen(port, () => {
    console.log(`Server up and listening on port ${port}`);
})