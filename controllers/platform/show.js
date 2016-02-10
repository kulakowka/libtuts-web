'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')
const async = require('async')

// GET /:name
module.exports = function show (req, res, next) {
  async.parallel({
    platform: async.asyncify(() => loadPlatform(req.params)),
    projects: async.asyncify(() => loadProjects(req.params.name)),
    tutorials: async.asyncify(() => loadTutorials(req.params.name))
  }, (err, results) => {
    if (err) return next(err)
    if (!results.platform) return next(notFoundError('Platform not found'))
    res.render('platforms/show', results)
  })
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
