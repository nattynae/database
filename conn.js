var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '6b86af9d',
  database: 'regproject',
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
  console.log('200: OK, Connected');

  // connection.query('select * from person', function(err ,result) {
  //   console.log(result);
  // });

  });

module.exports = connection;
