const fs = require('fs');
const mysql = require('mysql');
let info = fs.readFileSync('./mysql.json', 'utf8');
let config = JSON.parse(info);

function getConnection() {
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
}

let sql = `select * from girl_group(_id, name, debut, hit_song_id), 
            where (_id=?, name=?, debut=?, hit_song_id=?) ;`;
        let conn = this.getConnection();
        conn.query(sql, _id, function(error, rows, fields) {
            if (error)
                console.log(error);
            callback(rows[0]);      // 주의할 것
        });
        conn.end();
    },


/* 
let sql = `insert into _id(name, debut, hit_song_id) values(?, ?);`;
let conn = this.getConnection();
conn.query(sql, params, function(error, fields) {
    if (error)
            console.log(error);
        callback();
});
conn.end();

 */
/* let sql = `SELECT song.sid, song.title, gg.name, song.lyrics FROM song
left JOIN girl_group AS gg
ON song.sid=gg.hit_song_id
ORDER BY song.sid DESC
LIMIT 10;`;
let conn = getConnection();
conn.query(sql, function(error, rows, fields) {
    if (error)
        console.log(error);
    console.log(rows);
});
conn.end(); */

/* let sql = `select * from song where sid=?;`;
let conn = getConnection();
conn.query(sql, 123, function(error, rows, fields) {
    if (error)
        console.log(error);
    console.log(rows[0]);
});
conn.end();
let sql = `delete from song where sid=?;`;
let conn = getConnection();
conn.query(sql, 125, function(error, fields) {
    if (error)
        console.log(error);
});
conn.end(); */
