'use strict'

const marked = require('marked')

module.exports = function viewHelpersMiddleware (req, res, next) {
  res.locals.currentUser = req.session.user
  res.locals.marked = marked
  res.locals.env = req.app.get('env')
  next()
}
