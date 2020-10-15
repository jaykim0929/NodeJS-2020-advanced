const fs = require('fs');
const { Callbacks } = require('jquery');
const mysql = require('mysql');
const { callbackify } = require('util');
let info = fs.readFileSync('./mysql.json', 'utf8');
let config = JSON.parse(info);


module.exports = {
    getConnection:  function() {
        let conn = mysql.createConnection({
            host:   config.host,
            user:   config.user,
            password:   config.password,
            database:   config.database,
            port:   config.port
        });
        conn.connect(function(error) {
            if (error) 
                console.log('mysql connection error :' + err);
        });
        return conn;
    },
    // BBS DB
    getBbsList:         function(callback) {
        let conn = this.getConnection();
        let sql = `SELECT b.bid, b.uid, u.uname, b.title, b.content, b.modTime, b.viewCount
                    FROM bbs AS b
                    JOIN users AS u
                    ON b.uid=u.uid
                    WHERE b.isDeleted=0
                    ORDER BY b.bid desc
                    LIMIT 10;`;
        conn.query(sql, params, (error,  fields) => {
            if (error)
                console.log(error);
            callback();
        });
        conn.end();
    },
    getBbsTotalCount:       function(callback) {
        let conn = this.getConnection();
        let sql = `SELECT COUNT(*) FROM bbs WHERE isDeleted=0;`;
        conn.query(sql, params, (error, fields) =>{
            if (error)
                console.log(error);
            callback();
        });
        conn.end();
    },
    // USERS DB
    registerUser:           function(params, callback) {
        let conn = this.getConnection();
        let sql = `INSERT INTO users(uid, pwd, uname, tel, email) VALUES(?,?,?,?);`;
        conn.query(sql, params, (error, fields) => {
            if (error)
                console.log(error);
            callback();
        });
        conn.end();
    }
}