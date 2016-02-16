'use strict'

const API = require('../../utils/api')
const mailerApi = require('../../utils/mailerApi')

// POST /auth/resend
module.exports = function *(req, res, next) {
  let user = yield loadUser(req.body)
  if (!user) return res.json({error: {msg: 'Can\'t find that email, sorry.'}})

  // let token = '123' // yield createVerificationToken(user.id)

  // здесь мы отправим запрос в мейлер и попросим его отправить юзеру письмо
  // sendEmail(user, token)

  // надо вернуть какой нибудь результат, вернм мыло и токен (для дебага, потом уберу)
  res.json({email: user.email})
}

function loadUser (body) {
  return API.model('user').findOne({
    email: body.email
  }).exec()
}
