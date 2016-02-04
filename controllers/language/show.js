'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')
const Language = API.model('language')
const Project = API.model('project')

// GET /language/:language
module.exports = function show (req, res, next) {
  loadLanguage(req.params.language).then(language => {
    if (!language) return next(notFoundError('Language not found'))
    loadProjects(language._id).then(projects => {
      res.render('languages/show', {
        language,
        projects
      })
    })
  }).catch(next)
}

function loadLanguage (language) {
  return Language.findOne(language).select('_id,slug,name,projectsCount,tutorialsCount').exec()
}

function loadProjects (language) {
  return Project.find({language}).populate('language,platform').limit(2).exec()
}
