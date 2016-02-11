'use strict'

// GET /auth/signin
module.exports = function *(req, res, next) {
  res.render('auth/signin')
}
