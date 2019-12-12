const config = require('./db.config');
const mysql = require('mysql');

const dbConfig = {
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.db,
    port: config.database.port
}

const pool = mysql.createPool(dbConfig);

module.exports = {pool};