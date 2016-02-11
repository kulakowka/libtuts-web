'use strict'

const API = require('../../utils/api')

// POST /auth/register
module.exports = function *(req, res, next) {
  let user = yield createUser(req.body)
  req.session.user = user
  res.redirect(user.webUrl)
}

function createUser (body) {
  return API.model('user').create(body).exec()
}
