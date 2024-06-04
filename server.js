var express = require('express');
var app = express();
var createError = require('http-errors');
var http = require('http');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
var consign = require('consign');




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


consign()
  .include('src/config')
  .then('src/routes')
  .then('src/controllers')
  .into(app);




app.listen(3000, function(){
  console.log('APP rodando na porta 3000');
});
