'use strict'

const API = require('../../utils/api')

// POST /comments
module.exports = function index (req, res, next) {
  let creator = req.session.user
  req.body.creator = creator
  createComment(req.body).then(comment => {
    res.redirect(comment.webUrl)
  }).catch(next)
}

function createComment (body) {
  return API.model('comment').create(body).exec()
}
