'use strict'

const API = require('../../utils/api')
const Language = API.model('language')
const Project = API.model('project')
const Platform = API.model('platform')
const Tutorial = API.model('tutorial')

const async = require('async')

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
  return Project.find().populate('platform,language').limit(10).exec()
}

function loadLanguages () {
  return Language.find().limit(15).exec()
}

function loadPlatforms () {
  return Platform.find().limit(15).exec()
}

function loadTutorials () {
  return Tutorial.find().limit(10).exec()
}
