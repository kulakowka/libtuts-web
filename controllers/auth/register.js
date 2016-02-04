'use strict'

// POST /auth/register
module.exports = function register (req, res, next) {
  req.session.user = {
    username: req.body.username,
    fullName: req.body.username
  }
  res.redirect('/')
}
