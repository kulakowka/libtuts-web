'use strict'

// POST /auth/logout
module.exports = function *(req, res, next) {
  delete req.session.user
  res.json({logout: true})
}
