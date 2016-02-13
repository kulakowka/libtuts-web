'use strict'

const API = require('../../utils/api')

// POST /auth/register
module.exports = function *(req, res, next) {
  let user = yield createUser(req.body)
  if (!user.errors) req.session.user = user
  res.json(user)
}

function createUser (body) {
  return API.model('user').create(body).exec()
}
