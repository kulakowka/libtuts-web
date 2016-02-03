'use strict'

// POST /auth/logout
module.exports = function logout (req, res, next) {
  delete req.session.user
  res.redirect('/')
}
