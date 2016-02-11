'use strict'

const API = require('../../utils/api')

// POST /auth/login
module.exports = function *(req, res, next) {
  let user = yield loadUser(req.body)
  req.session.user = user
  res.redirect(user.webUrl)
}

function loadUser (body) {
  return API.model('user').findOne({
    username: body.identifier,
    password: body.password
  }).exec()
}
