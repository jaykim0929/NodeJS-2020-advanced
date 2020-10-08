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

let sql = `SELECT I.continent AS Continent, 
    I.name AS Country, 
    r.Name AS City,
    r.population AS Population
	FROM country AS I
	inner JOIN city AS r
	ON I.code = r.CountryCode
	WHERE I.continent = 'asia'
	ORDER BY r.population DESC
	LIMIT 10;`;
conn.query(sql, function(error, rows, fields) {
    if (error)
        console.log(error);
    for (let row of rows) {
        console.log(row.Continent, row.Country, row.City, row.Population);
    }
});

conn.end();