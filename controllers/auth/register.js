'use strict'

const API = require('../../utils/api')
const MailerAPI = require('../../utils/mailerApi')

// POST /auth/register
module.exports = function *(req, res, next) {
  let user = yield createUser(req.body)
  if (user.errors) return res.json(user)
  let verificationToken = yield createVerificationToken(user.id)
  // здесь мы отправим запрос в мейлер и попросим его отправить юзеру письмо
  yield MailerAPI.sendVerifyEmail(user, verificationToken.token)
  req.session.user = user
  res.json(user)
  // console.log('sendVerifyEmail result:', result)
}

function createVerificationToken (user) {
  return API.model('verificationToken').create({user}).exec()
}

function createUser (body) {
  return API.model('user').create(body).exec()
}
