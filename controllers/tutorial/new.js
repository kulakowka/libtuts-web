'use strict'

// GET /tutorial/new
module.exports = function newAction (req, res, next) {
  res.render('tutorials/new', {tutorial: {}})
}
