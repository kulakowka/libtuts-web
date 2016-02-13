'use strict'

const API = require('../../utils/api')

// POST /auth/login
module.exports = function *(req, res, next) {
  let user = yield loadUser(req.body)
  if (!user) return res.json({error: {msg: 'Incorrect username or password.'}})
  if (!user.errors) req.session.user = user
  res.json(user)
}

function loadUser (body) {
  return API.model('user').findOne({
    username: body.identifier,
    password: body.password
  }).exec()
}
