const mysql = require('mysql');
const fs = require('fs');
let info = fs.readFileSync('./mysql.json', 'utf8');
let conninfo = JSON.parse(info);

let conn = mysql.createConnection({
    host:   conninfo.host,
    user:   conninfo.user,
    password:   conninfo.password,
    database:   conninfo.database,
    port:   conninfo.port
});

conn.connect();

let sql = 'select * from city where population > 9000000';
conn.query(sql, function(error, rows, fields) {
    if (error)
        console.log(error);
    for (let row of rows) {
        console.log(row.ID, row.Name, row.CountryCode, row.District, row.Population);
    }
});

conn.end();