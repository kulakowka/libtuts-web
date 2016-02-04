'use strict'

// POST /auth/login
module.exports = function login (req, res, next) {
  req.session.user = {
    username: req.body.identifier,
    fullName: req.body.identifier
  }
  res.redirect('/')
}
