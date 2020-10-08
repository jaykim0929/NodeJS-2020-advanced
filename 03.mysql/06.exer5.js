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

let sql = `SELECT city.Name AS NAME,
    city.Population AS population,
    cl.Language AS language
    FROM city
    JOIN countrylanguage AS cl
    ON city.CountryCode = cl.CountryCode
    WHERE cl.IsOfficial = 'T'
    GROUP BY city.Name
    ORDER BY city.Population desc
    LIMIT 10;`;
conn.query(sql, function(error, rows, fields) {
    if (error)
        console.log(error);
    for (let row of rows) {
        console.log(row.NAME, row.population, row.language);
    }
});

conn.end();