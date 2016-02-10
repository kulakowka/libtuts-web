'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')
const async = require('async')

// GET /tutorial/:_id
module.exports = function show (req, res, next) {
  async.parallel({
    tutorial: async.asyncify(() => loadTutorial(req.params)),
    comments: async.asyncify(() => loadComments(req.params))
  }, (err, results) => {
    if (err) return next(err)
    if (!results.tutorial) return next(notFoundError('Tutorial not found'))
    res.render('tutorials/show', results)
  })
}

function loadTutorial (params) {
  return API.model('tutorial').findOne(params).populate('creator,contributors').exec()
}

function loadComments (tutorial) {
  return API.model('comment').find({tutorial}).sort('-createdAt').populate('creator').exec()
}
