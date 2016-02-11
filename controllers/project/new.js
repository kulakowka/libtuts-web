'use strict'

const API = require('../../utils/api')

// GET /project/new
module.exports = function *(req, res, next) {
  let results = yield {
    languages: loadLanguages(),
    platforms: loadPlatforms()
  }
  results.project = {}
  res.render('projects/new', results)
}

function loadLanguages () {
  return API.model('language').find().sort('-projectsCount').limit(200).exec()
}

function loadPlatforms () {
  return API.model('platform').find().sort('-projectsCount').limit(200).exec()
}
