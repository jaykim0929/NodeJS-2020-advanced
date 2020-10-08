const mysql = require('mysql');
const fs = require('fs');
let info = fs.readFileSync('./mysql.JSON', 'utf8');
let conninfo = JSON.parse(info);

let conn = mysql.createConnection({
    host:   conninfo.host,
    user:   conninfo.user,
    password:   conninfo.password,
    database:   conninfo.database,
    port:   conninfo.port
});

conn.connect();

let sql = `SELECT g.name AS NAME,
    date_format(g.debut, '%Y-%m-%d') AS debutDate,
    s.title AS songTitle
    FROM girl_group AS g
    JOIN song AS s
    on s.sid = g.hit_song_id
    WHERE debut BETWEEN '2009-01-01' AND '2009-12-31'
    ORDER BY debut;`;
conn.query(sql, function(error, rows, fields) {
    if (error)
        console.log(error);
    for (let row of rows) {
        console.log(row.NAME, row.debutDate, row.songTitle);
    }
});

conn.end();