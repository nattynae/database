var app = require('express');
var router = app.Router();
var mysql = require('mysql');
var con = require('./conn');

// SEARCH BY ID
router.post('/searchbyid', function(req, res){
  let studentID = req.body.IDNo;
  let sql_query = '';

  // if user search with 'all' he will get 'all'
  if (studentID != 'all') {
    sql_query += `select * from person where IDNo = ${studentID};`;
  }
  else{
    sql_query += `select * from person;`;
  }
  con.query(sql_query, function(err, result) {
    if (err) {
      console.log("Error: ", err);
      console.log("Cause: ",sql_query);
      res.send({});
    }
    else {
      // console.log(sql_query,"No error");
      // console.log(result);
      res.send(result);
    }
  });
})
/*
// INSERT STUDENT DATA
router.post('/insertperson', function(req, res){

  let studentID = req.body.IDNo;
  let studentID = req.body.FName;
  let studentID = req.body.Lname;
  let studentID = req.body.Sex;
  let studentID = req.body.BirthDate;
  let studentID = req.body.Address;
  let studentID = req.body.PhoneNo;

  let sql_query = `select * from person where IDNo = ${studentID};`;
  con.query(sql_query, function(err, result) {
    if (err) {
      console.log("query error!", err);
      console.log(sql_query);
      res.send({});
    }
    else {
      res.send(result);
    }
  });
})
*/
// this make we can access homepage from 'localhost:8080/student''
router.get('/', function(req, res){
  res.sendfile("./search.html");
})

module.exports = router;

// below this is about funny that our god
// (my friend who help us before present day)
// left it to us

/*
router.post('/searchby/:type', function(req, res){
  let type = req.params.type;

router.post('/searchbyid2', function(req, res){
  let studentID = req.body.IDNo;
  let sql_query = `select * from person;`;
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

})*/
/*
router.post('/searchbyid', function(req, res){
  let studentID = req.body.IDNo;
  let sql_query = `select * from fakechula1 where id = ${studentID};`;
  con.query(sql_query, function(err, result) {
    if (err) {
      console.log("query error!",studentID);
      console.log(sql_query);
      res.send({});
    }
    else {
      res.send(result);
    }
  });

})

router.get('/fun/:txt.:speed', function(req, res){
  var txt = req.params.txt;
  var speed = req.params.speed;
  res.send(`<marquee scrollamount=${speed}>${txt}</marquee>`);
})

*/
