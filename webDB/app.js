var connection = require('./conn');
var express = require('express');
var http = require('http');
var app = express();

var server = http.createServer(app);
var bodyParser = require('body-parser');
var studentData = require('./student');
var adminpage = require('./admin');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/student',studentData);
app.use('/admin',adminpage);

// Only LocalHost
app.use('/student/vendor', express.static('vendor'));
app.use('/student/js', express.static('js'));
app.use('/vendor', express.static('vendor'));
app.use('/css',express.static('css'));
app.use('/js',express.static('js'));
app.use('/rank',express.static('rank.html'));
app.use('/report',express.static('report.html'));

app.listen(8080, () =>{
  console.log("Start server at port 8080!");
});
