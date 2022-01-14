var createError = require('http-errors');
const sqlite3 = require('sqlite3').verbose();
  var express = require('express');
  var path = require('path');
  var cookieParser = require('cookie-parser');
  var logger = require('morgan');
  var app = express();

  require('./api/config/sqlLiteConfig').initialize().createTables();
  require('dotenv').config();

  let booksRoutes = require('./api/routes/booksRoute');

  const http = require('http');
  _ = require("underscore");

 // app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use((req, res, next) => {
    // backbutton prevent
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(booksRoutes);

  // Handler for 404 - Resource Not Found
  app.use((req, res, next) => {
    res.status(404).send('We think you are lost!')
  })

  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.send("testing");
  })
        /******************* Service Launch *****************/
        try {
        const server = http.createServer(app);
        server.listen(8000);
        server.on('error', onError);
        console.log(`runnings on :http://${process.env.HOST}:${process.env.PORT}`);
    } catch (error) {
        console.error(error);
    }

    function onError(error) {
      if (error.syscall !== 'listen') {
        throw error;
      }
      var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    
      // handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          console.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(bind + ' is already in use');
          process.exit(1);
          break;
        default:
          throw error;
      }
    }
  
  module.exports = app;