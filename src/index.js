var http = require('http');
var express = require('express');
var ejsLayout = require('express-ejs-layouts');
var path = require('path');
var bodyParser = require('body-parser');
var loginRouter = require('../app_server/routers/loginRouter');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app_server/views'));
app.use(ejsLayout);

app.use('/public', express.static(path.join(__dirname, '../public')));


app.use('/', loginRouter);

app.listen(3000);