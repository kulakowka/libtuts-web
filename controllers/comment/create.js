'use strict'

const API = require('../../utils/api')

// POST /comments
module.exports = function *(req, res, next) {
  req.body.creator = req.session.user
  let newComment = yield createComment(req.body)
  let comment = yield loadComment(newComment._id)
  res.render('comments/includes/item', {comment})
}

function createComment (body) {
  return API.model('comment').create(body).exec()
}

function loadComment (_id) {
  return API.model('comment').findOne({_id}).populate('creator').exec()
}
