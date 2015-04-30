'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');




// init express
var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);

    app.set('view engine', 'handlebars');
    app.set('views', __dirname + 'app/scripts/views');
});

// set logging
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

// mount static
if (app.settings.env != "production") {
    app.use(express.static( path.join( __dirname, 'app') ));
    app.use(express.static( path.join( __dirname, '.tmp') ));

    app.use('connect-livereload');
} else {
    app.use(express.static( path.join( __dirname) ));
}


// route index.html
app.get('/', function(req, res){
  if (app.settings.env == "production") {
      res.sendfile( path.join( __dirname, 'index.html' ) );
  } else {
      res.sendfile( path.join( __dirname, 'app/index.html' ) );
  }
});

// start server
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express App started in env', app.settings.env);
});



