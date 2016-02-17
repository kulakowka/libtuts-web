'use strict'

const API = require('../../utils/api')
const MailerAPI = require('../../utils/mailerApi')

// POST /auth/resend
module.exports = function *(req, res, next) {
  let user = yield loadUser(req.body)
  if (!user) return res.json({error: {msg: 'Can\'t find that email, sorry.'}})

  // сгенерим новый токе
  let verificationToken = yield createVerificationToken(user.id)
  // здесь мы отправим запрос в мейлер и попросим его отправить юзеру письмо
  let result = yield MailerAPI.sendResetPassword(user, verificationToken.token)

  // надо вернуть какой нибудь результат, вернм мыло и токен (для дебага, потом уберу)
  res.json(result)  // сейчас возвращает {"message":"job created","id":69} это для тестов
}

function createVerificationToken (user) {
  return API.model('verificationToken').create({user}).exec()
}

function loadUser (body) {
  return API.model('user').findOne({
    email: body.email
  }).exec()
}
