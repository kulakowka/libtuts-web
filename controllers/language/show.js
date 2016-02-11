'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')

// GET /language/:name
module.exports = function *(req, res, next) {
  let results = yield {
    language: loadLanguage(req.params),
    projects: loadProjects(req.params.name),
    tutorials: loadTutorials(req.params.name)
  }
  if (!results.language) return notFoundError('Language not found')
  res.render('languages/show', results)
}

function loadLanguage (params) {
  return API.model('language').findOne(params).exec()
}

function loadProjects (language) {
  return API.model('project').find({language}).sort('-rank').limit(40).exec()
}

function loadTutorials (language) {
  return API.model('tutorial').find({languages: {$in: [language]}}).limit(30).sort('-createdAt').exec()
}
