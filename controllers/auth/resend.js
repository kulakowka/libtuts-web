'use strict'

// GET /auth/resend
module.exports = function *(req, res, next) {
  res.render('auth/resend')
}
