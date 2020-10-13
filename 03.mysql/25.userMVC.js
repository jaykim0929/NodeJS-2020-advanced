const express = require('express');
const bodyParser = require('body-Parser')
const dm = require('./db/userdb-module');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    dm.getAllLists(rows => {
        const view= require('./view/userlist');
        let html = view.mainForm(rows);
        res.send(html);
    });
});

app.get('/login',(req,res) => {
    const view = require('./view/userLogin');
    let html = view.loginForm();
    res.send(html);
});

app.listen(4000, () => {
    console.log('Server Running at http://127.0.0.1:4000');
});