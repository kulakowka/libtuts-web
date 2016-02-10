'use strict'

const async = require('async')
const API = require('../../utils/api')

// GET /
module.exports = function index (req, res, next) {
  async.parallel({
    languages: async.asyncify(loadLanguages),
    projects: async.asyncify(loadProjects),
    platforms: async.asyncify(loadPlatforms),
    tutorials: async.asyncify(loadTutorials)
  }, (err, results) => {
    if (err) return next(err)
    res.render('mainpage/index', results)
  })
}

function loadProjects () {
  return API.model('project').find().sort('-rank').limit(24).exec()
}

function loadLanguages () {
  return API.model('language').find().sort('-projectsCount').limit(24).exec()
}

function loadPlatforms () {
  return API.model('platform').find().sort('-projectsCount').limit(24).exec()
}

function loadTutorials () {
  return API.model('tutorial').find().sort('-createdAt').populate('creator').limit(6).exec()
}
