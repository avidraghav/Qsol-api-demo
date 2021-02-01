const express = require('express');
const app = express();
//const morgan = require('morgan');

const datesheetRoutes = require('./api/routes/datesheets');

//app.use(morgan('dev'));
app.use('/datesheets', datesheetRoutes);

app.use((req, res, next) =>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use ((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});
module.exports = app;