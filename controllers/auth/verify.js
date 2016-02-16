'use strict'

const API = require('../../utils/api')

// GET /auth/verify/:token
module.exports = function *(req, res, next) {
  let verificationToken = yield loadToken(req.params)
  if (!verificationToken) return res.render('auth/verify')

  let user = yield updateUser(verificationToken.user)
  if (!user) return res.render('auth/verify')

  res.redirect('/settings/emails')
}

function loadToken (params) {
  return API.model('verificationToken').findOne(params).exec()
}

function updateUser (_id) {
  return API.model('user').update({_id}, {emailConfirmed: true}).exec()
}
