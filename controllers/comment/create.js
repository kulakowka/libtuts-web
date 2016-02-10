'use strict'

const API = require('../../utils/api')

// POST /comments
module.exports = function index (req, res, next) {
  let creator = req.session.user
  req.body.creator = creator
  createComment(req.body).then(comment => {
    return loadComment(comment._id).then(comment => {
      res.render('comments/includes/item', {comment})
    })
  }).catch(next)
}

function createComment (body) {
  return API.model('comment').create(body).exec()
}

function loadComment (_id) {
  return API.model('comment').findOne({_id}).populate('creator').exec()
}
