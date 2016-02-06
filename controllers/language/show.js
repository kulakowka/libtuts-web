'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')
const Language = API.model('language')
const Project = API.model('project')

const async = require('async')

// GET /language/:name
module.exports = function show (req, res, next) {
  async.parallel({
    language: async.asyncify(() => loadLanguage(req.params.name)),
    projects: async.asyncify(() => loadProjects(req.params.name))
  }, (err, results) => {
    if (err) return next(err)
    if (!results.language) return next(notFoundError('Language not found'))
    res.render('languages/show', results)
  })
}

function loadLanguage (name) {
  return Language.findOne({name}).exec()
}

function loadProjects (language) {
  return Project.find({language}).exec()
}
