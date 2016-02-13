'use strict'

const API = require('../../utils/api')

// POST /auth/resend
module.exports = function *(req, res, next) {
  let user = yield loadUser(req.body)
  if (!user) return res.json({error: {msg: 'Can\'t find that email, sorry.'}})
  // здесь мы отправим запрос к API и попросим его отправить юзеру письмо еще раз
  res.json({email: user.email})
}

function loadUser (body) {
  return API.model('user').findOne({
    email: body.email
  }).exec()
}
