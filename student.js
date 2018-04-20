var app = require('express');
var router = app.Router();
var mysql = require('mysql');
var con = require('./conn');

// SEARCH BY ID
router.post('/searchbyid', function(req, res){
  let personID = req.body.IDNo;
  let searchQuery = '';

  // if user search with 'all' he will get 'all'
  if (personID == 'all' || personID == '*') {
    searchQuery += `select IDNo,Fname,Lname,Sex,DATE_FORMAT(BirthDate, '%Y-%m-%d') as BirthDate,Address,PhoneNo from person`;

  }

  else{
    searchQuery += `select * from person where IDNo = ${personID};`;
  }
  con.query(searchQuery, function(err, result) {
    if (err) {
      console.log("search query error: ", err);
      console.log("query error cause: ", searchQuery);
      res.send({});
    }
    else {
      // console.log(sql_query,"No error");
      // console.log(result);
      res.send(result);
    }
  });
})

// INSERT STUDENT DATA
router.post('/insertperson', function(req, res){

  let personID = req.body.IDNo;
  let Fname = req.body.Fname;
  let Lname = req.body.Lname;
  let Sex = req.body.Sex;
  let BirthDate = req.body.BirthDate;
  let Address = req.body.Address;
  let PhoneNo = req.body.PhoneNo;

  let checkQuery = `select * from person where IDNo=${personID};`;
  con.query(checkQuery, function(err, checkResult) {
    if (err) {
      console.log("check query error: ", err);
      console.log("query error cause: ",checkQuery);
    }
    else if (!checkResult.length>0) {
      let insertQuery = `insert into person(IDNo,Fname,Lname,Sex,BirthDate,Address,PhoneNo)
      values('${personID}','${Fname}','${Lname}','${Sex}','${BirthDate}','${Address}','${PhoneNo}');`;
      con.query(insertQuery, function(err, result) {
        if (err) {
          console.log("insert query error: ", err);
          console.log("query error cause: ",insertQuery);
          res.send({});
        }
        else {
          console.log("Success");
          res.send('Success');
        }
      });
    }
    else {
      console.log("Duplicate");
      res.send({});
    }
  });

})

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
