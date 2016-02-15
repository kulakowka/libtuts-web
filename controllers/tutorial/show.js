'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')

// GET /tutorial/:_id
module.exports = function *(req, res, next) {
  let results = yield {
    tutorial: loadTutorial(req.params),
    comments: loadComments(req.params)
  }
  
  if (!results.tutorial) return notFoundError('Tutorial not found')
  res.render('tutorials/show', results)
}

function loadTutorial (params) {
  return API.model('tutorial').findOne(params).populate('creator contributors').exec()
}

function loadComments (tutorial) {
  return API.model('comment').find({tutorial}).sort('-createdAt').populate('creator').exec()
}
