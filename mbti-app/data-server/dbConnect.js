const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cjsgotjd1@',
  port: '3306',
  database: 'praticedb',
});

connection.connect();

module.exports = connection;
