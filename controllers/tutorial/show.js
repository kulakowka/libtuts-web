'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')
const Tutorial = API.model('tutorial')
const Comment = API.model('comment')

const async = require('async')

// GET /tutorial/:id
module.exports = function show (req, res, next) {
  async.parallel({
    tutorial: async.asyncify(() => loadTutorial(req.params.id)),
    comments: async.asyncify(() => loadComments(req.params.id))
  }, (err, results) => {
    if (err) return next(err)
    if (!results.tutorial) return next(notFoundError('Tutorial not found'))
    res.render('tutorials/show', results)
  })
}

function loadTutorial (_id) {
  console.log('loadTutorial', _id)
  return Tutorial.findOne({_id}).exec()
}

function loadComments (tutorial) {
  return Comment.find({tutorial}).populate('creator').exec()
}

