'use strict'

const API = require('../../utils/api')

// POST /auth/register
module.exports = function register (req, res, next) {
  createUser(req.body).then(user => {
    req.session.user = user
    res.redirect(user.webUrl)
  }).catch(next)
}

function createUser (body) {
  return API.model('user').create(body).exec()
}
