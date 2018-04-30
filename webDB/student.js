var app = require('express');
var router = app.Router();
var mysql = require('mysql');
  var con = require('./conn');

router.post('/searchbyid', function(req, res){
  let studentID = req.body.IDNo;
  let sql_query = `select * from person where IDNo = ${studentID};`;
  con.query(sql_query, function(err, result) {
    if (err) {
      console.log("query error!",studentID,err);
      console.log(sql_query);
      res.send({});
    }
    else {
      res.send(result);
    }
  });
})

router.post('/remove', function(req, res){
  let courseid = req.body.courseID;
   let sql_query = `DELETE from course where courseID = ${courseid}`;
   // let sql_query = `DELETE from course where courseID='10003'`;
  con.query(sql_query, function(err, result) {
    if (err) {
      console.log("query error!",courseid,err);
      console.log(sql_query);
      res.send({});
    }
    else {
      res.send(result);
    }
  });

})

router.get('/', function(req, res){
  res.sendfile('./index.html');
})

router.get('/rank',function(req,res){
  res.sendFile('./rank.html');
});

router.get('/report',function(req,res){
  res.sendFile(path.join(__dirname+'/report.html'));
});

module.exports = router;
