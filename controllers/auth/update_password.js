'use strict'

const API = require('../../utils/api')
// const MailerAPI = require('../../utils/mailerApi')

// POST /auth/update_password
module.exports = function *(req, res, next) {
  let verificationToken = yield loadToken(req.body.token)
  if (!verificationToken) return res.json({ error: { message: 'Token expired or not found' } })

  let condition = {_id: verificationToken.user}
  let update = {password: req.body.password}

  let user = yield updateUser(condition, update)
  if (user.errors) return res.json(user)

  // Отправим пользователю письмо о том что его пароль успешно изменен?
  // yield MailerAPI.sendVerifyEmail(user, verificationToken.token)
  res.json(user)
}

function loadToken (token) {
  return API.model('verificationToken').findOne({token}).exec()
}

function updateUser (condition, update) {
  return API.model('user').update(condition, update).exec()
}
