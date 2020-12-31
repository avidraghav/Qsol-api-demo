const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json(
        {
        message: 'It works for me!',
        id: '123',
        sex: 'm'
        }
    );
});

module.exports = app;