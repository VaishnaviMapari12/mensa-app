var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
});

conn.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
        return;
    }

    console.log("Database Connected!");
});

var exe = util.promisify(conn.query).bind(conn);

module.exports = conn;