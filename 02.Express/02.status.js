const express = require('express');
const utill = require('util');

const app = express();

app.get('/', function(req, res){
    let html = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Express</title>
    </head>
    <body>
        <h1>Welcome to Express world</h1>
    </body>
    </html>
    `;
    res.send(html);
});
app.get('*', (req, res) => {
    res.status(404).send('Path not found');     //methodchining
});
//app.post();

app.listen(4000, () => {
    console.log('Server Running at http://127.0.0.1:4000');
});