var connection = require('./conn');
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var bodyParser = require('body-parser');
var studentData = require('./student');
var router = require('./student');

// this make we can access homepage from 'localhost:8080'
// don't forget that our home page must be 'index.html'
// so we gonna change searchbyid-html to search.html
// (it has ever named index.html)
app.use('/',
  router.get('/', function(req, res){
    res.sendfile("./search.html");
  })
);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/student',studentData);

app.listen(8080, () =>{
  console.log("Start server at port 8080!");
});
