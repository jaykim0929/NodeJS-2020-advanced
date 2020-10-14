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
    getAllLists:    function(callback) {
        let conn = this.getConnection();
        let sql = `SELECT * FROM girl_group ORDER BY _id DESC LIMIT 20;`;
        conn.query(sql, (error, rows, fields) => {
            if (error)
                console.log(error);
            callback(rows);
        });
        conn.end();
    },
    
    insertGirl_group:     function(params, callback) {
        let sql = `INSERT INTO girl_group (name, debut, hit_song_id) 
                    value(?, ?, ?, ?);`;
        let conn = this.getConnection();
        conn.query(sql, params, function(error, fields) {
            if (error)
                console.log(error);
            callback();
        });
        conn.end();
    },
    deleteGirl_group:     function(_id, callback) {
        let sql = `delete from girl_group where _id=?;`;
        let conn = this.getConnection();
        conn.query(sql, _id, function(error, fields) {
            if (error)
                console.log(error);
            callback();
        });
        conn.end();
    },
    getSong:    function(_id, callback) {
        let sql = `select * from girl_group(_id, name, debut, hit_song_id), 
                    values(?, ?, ?, ?) 
                    ;`;
        let conn = this.getConnection();
        conn.query(sql, _id, function(error, rows, fields) {
            if (error)
                console.log(error);
            callback(rows[0]);      // 주의할 것
        });
        conn.end();
    },
    updateSong:     function(params, callback) {
        let sql = `update girl_group set _id=?, name=?, debut=?, hit_song_id=? where _id=?;`;
        let conn = this.getConnection();
        conn.query(sql, params, function(error, fields) {
            if (error)
                console.log(error);
            callback();
        });
        conn.end();
    }
}