'use strict'

const API = require('../../utils/api')

// GET /auth/reset/:token
module.exports = function *(req, res, next) {
  let verificationToken = yield loadToken(req.params)

  res.render('auth/reset', {verificationToken})
}

function loadToken (params) {
  return API.model('verificationToken').findOne(params).exec()
}

function updateUser (_id) {
  return API.model('user').update({_id}, {emailConfirmed: true}).exec()
}
