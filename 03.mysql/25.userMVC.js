const express = require('express');
const bodyParser = require('body-Parser');
const dm = require('./db/userdb-module');
const am = require('./view/alertMsg');

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

app.post('/login', (req, res) => {
    let uid = req.body.uid;
    let pwd = req.body.pwd;
    let pwdhash = dm.generateHash(pwd);
    dm.getUserInfo(uid, result => {
        if (result === undefined) {
            let html = am.alertMsg(`Login 실패: uid ${uid}이/가 없습니다`, 'login');
            res.send(html);
        } else {
            if (result.pwd === pwdhash) {
                console.log('Login 성공');
                res.redirect('/');
            } else {
                let html = am.alertMsg('Login 실패: 패스워드가 다릅니다.', '/login');
                res.send(html);
            }
        }
    });
});

app.listen(4000, () => {
    console.log('Server Running at http://127.0.0.1:4000');
});