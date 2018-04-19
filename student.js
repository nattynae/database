var app = require('express');
var router = app.Router();
var mysql = require('mysql');
var con = require('./conn');
/*
router.post('/searchby/:type', function(req, res){
  let type = req.params.type;
*/

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
/*
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
*/
router.get('/fun/:txt.:speed', function(req, res){
  var txt = req.params.txt;
  var speed = req.params.speed;
  res.send(`<marquee scrollamount=${speed}>${txt}</marquee>`);
})

router.get('/', function(req, res){
  res.sendfile("./index.html");
})




module.exports = router;
