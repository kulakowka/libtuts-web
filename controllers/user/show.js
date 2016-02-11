'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')

// GET /user/:username
module.exports = function *(req, res, next) {
  let user = yield loadUser(req.params)
  if (!user) return notFoundError('User not found')
  res.render('users/show', {user})
}

function loadUser (params) {
  return API.model('user').findOne(params).exec()
}
