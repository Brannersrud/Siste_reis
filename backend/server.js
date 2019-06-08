
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var BodyParser = require('body-parser');



app.use(express.static(__dirname+'/client/build'));
app.use(BodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// Connection URL
// Database Name
const parser = { useNewUrlParser: true };
mongoose.connect(url,parser)
.then(() => console.log("db connected"))
.catch((err) => console.log(err));