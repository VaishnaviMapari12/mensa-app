var express = require("express");
var mysql = require("mysql");
var util = require("util");

// ---- 1. Create Connection First ----
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "websitemansa",
});

// ---- 2. Connect to MySQL ----
conn.connect((err) => {
    if (err) throw err;
    console.log("Database Connected!");
});


var exe = util.promisify(conn.query).bind(conn);
module.exports = conn;
