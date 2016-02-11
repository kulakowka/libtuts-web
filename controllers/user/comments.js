'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')

// GET /user/:username/comments
module.exports = function *(req, res, next) {
  let user = yield loadUser(req.params)
  let comments = yield loadComments(user)
  if (!user) return notFoundError('User not found')
  res.render('users/comments', {user, comments})
}

function loadUser (params) {
  return API.model('user').findOne(params).exec()
}

function loadComments (user, callback) {
  return API.model('comment').find({creator: user._id}).sort('-createdAt').populate('creator').exec()
}
