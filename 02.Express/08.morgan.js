const express = require('express');
const morgan = require('morgan');
const util = require('util');

const app = express();

//app.use(morgan('combined'));
//app.use(morgan(':method + :date + :remote-addr'))
app.use(morgan('short'));
app.use(function(req, res) {
    res.send(`<h1>Morgan Middleware</h1>`);
});

app.listen(4000, () => {
    util.log('Server Running at http://127.0.0.1:4000');
});