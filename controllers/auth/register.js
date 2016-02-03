'use strict'

// POST /auth/register
module.exports = function register (req, res, next) {
  req.session.user = {
    username: 'kulakowka',
    fullName: 'Anton Kulakov'
  }
  res.redirect('/')
}
