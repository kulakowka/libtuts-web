'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')

// GET /:platform/:name
module.exports = function *(req, res, next) {
  let results = yield {
    project: loadProject(req.params),
    tutorials: loadTutorials(req.params)
  }
  if (!results.project) return notFoundError('Project not found')
  res.render('projects/show', results)
}

function loadProject (condition) {
  return API.model('project').findOne(condition).exec()
}

function loadTutorials (condition) {
  let project = condition.platform + '/' + condition.name
  return API.model('tutorial').find({projects: {$in: [project]}}).populate('creator').sort('-createdAt').exec()
}
