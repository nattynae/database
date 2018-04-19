var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'yukung',
  database: 'project',
  port: 3306,
});
/*
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'yukung',
  database: 'fakechula',
  port: 3306,
});
*/
connection.connect(function(err){
  if (err) console.log(err);
  console.log('You are connected now');
  /*
  connection.query('select * from fakechula1', function(err ,result) {
    console.log(result);
  });
  */
  });

module.exports = connection;
