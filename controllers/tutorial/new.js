'use strict'

const API = require('../../utils/api')

// GET /tutorial/new
module.exports = function *(req, res, next) {
  let results = yield {
    languages: loadLanguages(),
    platforms: loadPlatforms()
  }
  results.tutorial = {}
  if (req.query.project) results.tutorial.projects = [req.query.project]
  res.render('tutorials/new', results)
}

function loadLanguages () {
  return API.model('language').find().sort('-projectsCount').limit(200).exec()
}

function loadPlatforms () {
  return API.model('platform').find().sort('-projectsCount').limit(200).exec()
}
