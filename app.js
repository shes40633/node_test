var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var indexRouter = require('./router/index');
var userRouter = require('./router/user');
var cookieParser = require('cookie-parser');


var app = express();

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


app.use(cookieParser());

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/User', userRouter);





module.exports = app;