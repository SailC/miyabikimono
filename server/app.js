// express middleware & utils
var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
// var logger = require('morgan')
// var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')

// express routes
var index = require('./routes/index')
// init app
var app = express()

// pug setup
app.set('views', path.join(__dirname, 'views')) // A directory for the application's views.
app.set('view engine', 'pug')
// app.locals.basedir = path.join(__dirname, '../public') // Pug: The root directory of all absolute inclusion.

// middleware setup
// app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressValidator())
// app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public'))) // static file look up
app.use(favicon(path.join(__dirname, '../public/images/favicon.ico')))

// send all requests to index.html so browserHistory in React Router works
app.use('*', index)

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

// export app
module.exports = app
