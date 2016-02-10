'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')

const async = require('async')

// GET /:platform/:name
module.exports = function show (req, res, next) {
  async.parallel({
    project: async.asyncify(() => loadProject(req.params)),
    tutorials: async.asyncify(() => loadTutorials(req.params))
  }, (err, results) => {
    if (err) return next(err)
    if (!results.project) return next(notFoundError('Project not found'))
    res.render('projects/show', results)
  })
}

function loadProject (condition) {
  return API.model('project').findOne(condition).exec()
}

function loadTutorials (condition) {
  return API.model('tutorial').find({projects: {$elemMatch: condition}}).sort('-createdAt').exec()
}
