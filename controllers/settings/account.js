'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')

// GET /settings
module.exports = function *(req, res, next) {
  let user = yield loadUser(req.session.user._id)
  if (!user) return notFoundError('User not found')
  res.render('settings/account', {user})
}

function loadUser (id) {
  return API.model('user').findOne({_id: id}).exec()
}
