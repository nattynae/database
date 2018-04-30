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

router.post('/searchbycourseid', function(req, res){
  console.log(req.body.CourseID+" search");
  let courseID = req.body.CourseID;
  let sql_query = `select * from Course where CourseID = ${courseID};`;
  con.query(sql_query, function(err, result) {
    if (err) {
      console.log("query error!",courseID,err);
      console.log(sql_query);
      res.send({});
    }
    else {
      res.send(result);
    }
  });

})

router.post('/remove', function(req, res){
  console.log(req.body.CourseID+" remove");
  let courseid = req.body.CourseID;
   let sql_query = `DELETE from course where CourseID = ${courseid}`;
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
