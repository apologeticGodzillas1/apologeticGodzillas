var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'plantlife',
  database: 'valence'
})

mysqlConnection.connect();

module.exports = mysqlConnection;
