'use strict'

const API = require('../../utils/api')

// GET /
module.exports = function *(req, res, next) {
  let results = yield {
    tutorials: loadTutorials(),
    projects: loadProjects(),
    platforms: loadPlatforms(),
    languages: loadLanguages()
  }
  res.render('mainpage/index', results)
}

function loadTutorials () {
  return API.model('tutorial').find().sort('-createdAt').populate('creator').limit(7).exec()
}

function loadProjects () {
  return API.model('project').find().sort('-rank').limit(24).exec()
}

function loadPlatforms () {
  return API.model('platform').find().sort('-projectsCount').limit(24).exec()
}

function loadLanguages () {
  return API.model('language').find().sort('-projectsCount').limit(24).exec()
}




