const mysql = require('mysql');
const fs = require('fs');
let info = fs.readFileSync('./mysql.json', 'utf8');
let config = JSON.parse(info);

let conn = mysql.createConnection({
    host:   config.host,
    user:   config.user,
    password:   config.password,
    database:   config.database,
    port:   config.port
});

conn.connect();

let sql = `insert into song(title, lyrics) values('lovesickgirs, But we were born to be alone');` ;
conn.query(sql, function(error, fields) {
    if (error)
        console.log(error);
});

conn.end();