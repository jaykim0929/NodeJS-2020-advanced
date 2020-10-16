const fs = require('fs');
const mysql = require('mysql');
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
    getBbsList:         function(offset, callback) {
        let conn = this.getConnection();
        let sql = `SELECT b.bid, b.uid, u.uname, b.title, b.content, 
                    b.modTime, b.viewCount, b.replyCount
                    FROM bbs AS b
                    JOIN users AS u
                    ON b.uid=u.uid
                    WHERE b.isDeleted=0
                    ORDER BY b.bid DESC
                    LIMIT 10 offset ?;`;
        conn.query(sql, offset, (error, rows, fields) => {
            if (error)
                console.log(error);
            callback(rows);
        });
        conn.end();
    },
    getBbsTotalCount:       function(callback) {
        let conn = this.getConnection();
        let sql = `SELECT COUNT(*) as count FROM bbs WHERE isDeleted=0;`;
        conn.query(sql, (error, results, fields) =>{
            if (error)
                console.log(error);
            callback(results[0]);       //주의할 것
        });
        conn.end();
    },
    getSearchList:          function(keyword,callback) {
        let conn = this.getConnection();
        let sql =`SELECT b.bid, b.uid, u.uname, b.title, b.content,
                    b.modTime, b.viewCount, b.replyCount
                    FROM bbs AS b
                    JOIN users AS u
                    ON b.uid=u.uid
                    WHERE b.isDeleted=0 and b.title like ?
                    ORDER BY b.bid DESC;`;
        conn.query(sql, keyword, (error, rows, fields) => {
            if (error)
                console.log(error);
            callback(rows);
        });
        conn.end();
    },
    getBbsDate:             function(bid, callback) {
        let conn = this.getConnection();
        let sql =`SELECT b.uid, b.uid, u.uname, b.title, b.content,
                    DATE_FORMAT(b.modTime, '%Y-%m-%d %T') AS modTime,
                    b.viewCount, b.replyCount
                    FROM bbs AS b
                    JOIN users AS u
                    ON b.uid=u.uid
                    WHERE b.bid=?;`;
        conn.query(sql, bid, (error, rows, fields) => {
            if (error)
                console.log(error);
            callback (rows[0]);         //주의할것
        });
        conn.end();
    },
    getReplyData:           function(bid, callback) {
        let conn = this.getConnection();
        let sql =`SELECT r.rid, r.bid, u.uname, r.content, r.isMine,
                    DATE_FORMAT(r.regTime, '%Y-%m-%d %T') AS regTime,
                    FROM bbs AS r
                    JOIN users AS u
                    ON r.uid = u.uid
                    WHERE r.bid=?;`;
        conn.query(sql, bid, (error, rows, fields) => {
            if (error)
                console.log(error);
            callback(rows);
        });
        conn.end();
    },
    increaseViewCount:      function(bid, callback) {
        let conn = this.getConnection();
        let sql = `UPDATE bbs SET viewCount=VIEW+1 WHERE bid=?;`;
        conn.query(sql, bid, (error, fields) => {
            if (error)
                console.log(error);
            callback();
        });
        conn.end();
    },
    increaseReplyCount:     function(bid, callback) {
        let conn = this.getConnection();
        let sql = `UPDATE bbs SET replyCount=replyCount+1 WHERE bid=?;`;
        conn.query(sql,bid, (error, fields) => {
            if (error)
                console.log(error);
            callback();
        });
        conn.end();
    },
    insertReply:            function(params, callback) {
        let conn = this.getConnection();
        let sql = `INSERT INTO reply(bid, uid, content, isMine) VALUES(?,?,?,?);`;
        conn.query(sql,params,(error, fields) => {
            if(error)
                console.log(error);
            callback();
        });
        conn.end();
    },
    // USERS DB
    registerUser:           function(params, callback) {
        let conn = this.getConnection();
        let sql = `INSERT INTO users(uid, pwd, uname, tel, email) VALUES(?,?,?,?,?);`;
        conn.query(sql, params, (error, fields) => {
            if (error)
                console.log(error);
            callback();
        });
        conn.end();
    },
    getUserInfo:            function(uid, callback) {
        let conn = this.getConnection();
        let sql =`SELECT * FROM users WHERE uid LIKE ?;`;
        conn.query(sql, uid, (error, results, fields) => {
            if (error)
                console.log(error);
            callback(results[0]);       //주의할 것
        });
        conn,end();
    }
}