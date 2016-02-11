'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')

// GET /user/:username/comments
module.exports = function *(req, res, next) {
  let user = yield loadUser(req.params)
  let tutorials = yield loadTutorials(user)
  if (!user) return notFoundError('User not found')
  res.render('users/tutorials', {user, tutorials})
}

function loadUser (params) {
  return API.model('user').findOne(params).exec()
}

function loadTutorials (user, callback) {
  return API.model('tutorial').find({creator: user._id}).sort('-createdAt').populate('creator').exec()
}
