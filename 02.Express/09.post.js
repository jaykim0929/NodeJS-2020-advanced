const express = require('express');
const bodyParser = require('body-Parser')
const fs = require('fs');
const util = require('util');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    //res.send('<h1>3초후 로그인 페이지로 이동합니다.</h1>');
    setTimeout(() => {
        res.redirect('/login');
    }, 4000);
});
app.get('/login', (req, res) => {
    fs.readFile('09.loginform.html', 'utf8', (error, data) => {
        res.send(data);
    });
});

app.post('/login', (req, res) => {
    let uid = req.body.uid;
    let pwd = req.body.pwd;
    util.log(uid, pwd);
    if (uid === 'park' && pwd === '1234')
        res.send(`<h1>Login Sucess</h1>`);
    else
        res.redirect('/login');
});

app.listen(4000, () => {
    util.log('Server Running at http://127.0.0.1:4000');
});