'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')
const Platform = API.model('platform')
const Project = API.model('project')

const async = require('async')

// GET /:name
module.exports = function show (req, res, next) {
  async.parallel({
    platform: async.asyncify(() => loadPlatform(req.params.name)),
    projects: async.asyncify(() => loadProjects(req.params.name)),
    tutorials: async.asyncify(() => loadTutorials(req.params.name))
  }, (err, results) => {
    if (err) return next(err)
    if (!results.platform) return next(notFoundError('Platform not found'))
    res.render('platforms/show', results)
  })
}

function loadPlatform (name) {
  return Platform.findOne({name}).exec()
}

function loadProjects (platform) {
  return Project.find({platform}).sort('-rank').limit(40).exec()
}

function loadTutorials (platform) {
  return API.model('tutorial').find({platforms: {$in: [platform]}}).limit(30).sort('-createdAt').exec()
}
