'use strict'

const API = require('../../utils/api')

// POST /auth/login
module.exports = function register (req, res, next) {
  loadUser(req.body).then(user => {
    req.session.user = user
    res.redirect(user.webUrl)
  }).catch(next)
}

function loadUser (body) {
  return API.model('user').findOne({
    username: body.identifier,
    password: body.password
  }).exec()
}
