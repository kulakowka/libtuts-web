'use strict'

// POST /auth/login
module.exports = function login (req, res, next) {
  req.session.user = {
    username: 'tj',
    fullName: 'TJ Holowaychuk'
  }
  res.redirect('/')
}
