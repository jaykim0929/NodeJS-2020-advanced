const express = require('express');
const ut = require('./util');
const dm = require('./db/db-module');
const alert = require('./view/alertMsg');
const tplt = require('./view/template');

const uRouter = express.Router();
uRouter.get('/dispatch', (req, res) => {
    if (req.session.uid === 'admin') {
        res.redirect('/user/list/1');
    } else {
        res.redirect(`/user/update/${req.session.uid}`);
    }
});

uRouter.get('/list/:page', (req,res) => {
    let uid =req.params.uid;
    if (uid != req. session.uid) {
        let html = alert.alertMsg('조회권한이 없습니다.', `/bbs/list/1`);
        res.send(html);
    } else {
        dm.getUserInfo(uid, result => {
            let view =require('./view/userView')
        })
    }
})




uRouter.post('/register', (req, res) => {
    let uid = req.body.uid;
    let pwd = req.body.pwd;
    let pwd2 = req.body.pwd2;
    let uname = req.body.uname;
    let tel = req.body.tel;
    let email = req.body.email;
    if (pwd !== pwd2) {
        let html = alert.alertMsg('패스워드가 다릅니다.', '/user/register');
        res.send(html);
    } else {
        let pwdHash = ut.generateHash(pwd);
        let params = [uid, pwdHash, uname, tel, email];
        dm.registerUser(params, () => {
            res.redirect('/login');
        });
    }
});

module.exports = uRouter;
