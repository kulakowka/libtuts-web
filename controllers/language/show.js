'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')

const async = require('async')

// GET /language/:name
module.exports = function show (req, res, next) {
  async.parallel({
    language: async.asyncify(() => loadLanguage(req.params.name)),
    projects: async.asyncify(() => loadProjects(req.params.name)),
    tutorials: async.asyncify(() => loadTutorials(req.params.name))
  }, (err, results) => {
    if (err) return next(err)
    if (!results.language) return next(notFoundError('Language not found'))
    res.render('languages/show', results)
  })
}

function loadLanguage (name) {
  return API.model('language').findOne({name}).exec()
}

function loadProjects (language) {
  return API.model('project').find({language}).sort('-rank').limit(40).exec()
}

function loadTutorials (language) {
  return API.model('tutorial').find({languages: {$in: [language]}}).limit(30).sort('-createdAt').exec()
}
