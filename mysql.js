//MYSQL連線
var mysql = require('mysql');

function SQLConnection(params) {
  var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'express'
  });  
  return connection;
}




module.exports.SQLConnection = SQLConnection;