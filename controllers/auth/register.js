'use strict'

const API = require('../../utils/api')
const MailerAPI = require('../../utils/mailerApi')

// POST /auth/register
module.exports = function *(req, res, next) {
  let user = yield createUser(req.body)
  if (user.errors) return res.json(user)
  let token = yield createVerificationToken(user.id)
  req.session.user = user
  res.json(user)

  // здесь мы отправим запрос в мейлер и попросим его отправить юзеру письмо
  let result = yield MailerAPI.sendVerifyEmail(user, token)
  console.log('sendVerifyEmail result:', result)
}

function createVerificationToken (user) {
  return API.model('verificationToken').create({user}).exec().then(verificationToken => verificationToken.token)
}

function createUser (body) {
  return API.model('user').create(body).exec()
}
