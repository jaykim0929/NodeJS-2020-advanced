const express = require('express');
const util = require('util');

const app = express();

//localhost:4000/query?id=kim
app.get('/query', function(req, res) {
    let id = req.query.id;
    res.send(`<h1>id - ${id}</h1>`);
});

//localhost:4000/rest/id/kim
app.get('/lest/id/:id', function(req, res) {
    let id = req.params.id;
    res.send(`<h1>id - ${id}</h1>`);
});

//localhost:4000/rest2/kim
app.get('/lest2/:id', function(req, res) {
    let id = req.params.id;
    res.send(`<h1>id - ${id}</h1>`);
});

app.get('*', (req, res) => {
    res.status(404).send('Path not found');
});
//app.post();

app.listen(4000, () => {
    util.log('Server Running at http://127.0.0.1:4000');
});