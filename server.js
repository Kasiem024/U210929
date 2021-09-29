'use strict';

const express = require('express');
const app = express();
const port = 8042;

app.get('/', (req, res) => {
    res.send('HELLO WORLD!');
})

app.listen(port, () => {
    console.log(`Server up and listening on port ${PORT}`);
})