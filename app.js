const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const serveStatic = require('serve-static')
const bodyParser = require('body-parser')
const browserify = require('browserify-middleware')
const compression = require('compression')
const helmet = require('helmet')
const routes = require('./routes/index')

var app = express()

app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
  name: 'session',
  keys: [
    '53a92824-fee4-4836-bc4d-10f370a39f7c',
    'b7206292a45343b5bd14176263eff07d'
  ]
}))

app.use(helmet())
app.use(compression())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(require('./utils/stylus'))
app.get('/js/app.js', browserify(path.join(__dirname, 'assets/js/app.js')))
app.use(serveStatic(__dirname + '/public', {
  maxAge: '1d'
}))
app.use('/', routes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

module.exports = app
