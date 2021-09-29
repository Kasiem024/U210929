'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('HELLO WORLD!')
})

app.listen(port, () =>{
    console.log('Server up and listening on port ${PORT}');
})