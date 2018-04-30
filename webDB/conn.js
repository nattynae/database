var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'yukung',
  database: 'project',
  port: 3306,
});

connection.connect(function(err){
  if (err) console.log(err);
});

module.exports = connection;
