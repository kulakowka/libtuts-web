'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')

// GET /:name
module.exports = function *(req, res, next) {
  let results = yield {
    platform: loadPlatform(req.params),
    projects: loadProjects(req.params.name),
    tutorials: loadTutorials(req.params.name)
  }
  if (!results.platform) return notFoundError('Platform not found')
  res.render('platforms/show', results)
}

function loadPlatform (params) {
  return API.model('platform').findOne(params).exec()
}

function loadProjects (platform) {
  return API.model('project').find({platform}).sort('-rank').limit(40).exec()
}

function loadTutorials (platform) {
  return API.model('tutorial').find({platforms: {$in: [platform]}}).limit(30).sort('-createdAt').exec()
}
