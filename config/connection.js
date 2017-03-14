// DEPENDANCIES---------------------
const mysql = require('mysql');

//----------------------------------
console.log("|-------------------------------\n");
console.log("Registering a connection to the DB");
console.log("|");
console.log("|");
console.log("|-------------------------------\n");

const options = {
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    username: process.env.MYSQL_USER || 'developer',
    password: process.env.MYSQL_PASSWORD || null,
    database: 'burger_db'
}

const db = mysql.createConnection(options);

// On Connect --------------------------------
db.connect((err) => {
    if err throw new Error(err);

    console.log(`Connected to DB @${options.host}:${options.port}`);
});

module.exports = db;
