'use strict';

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8042;

app.get('/', (req, res) => {

    fs.readFile('app.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
  });

});

app.get('/exercise2.js', (req, res) => {

    fs.readFile('exercise2.js', (err, data) => {
        res.send(data);
  });

});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});