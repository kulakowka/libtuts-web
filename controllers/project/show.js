'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')
const Project = API.model('project')
const Tutorial = API.model('tutorial')

// GET /:platform/:project
module.exports = function show (req, res, next) {
  loadProject(req.params.platform, req.params.project).then(project => {
    if (!project) return next(notFoundError('Project not found'))
    return loadTutorials(project._id).then(tutorials => {
      res.render('projects/show', {
        project,
        tutorials
      })
    })
  }).catch(next)
}

function loadProject (platform, project) {
  return Project.findOne({platform, project}).populate('platform,language').exec()
}

function loadTutorials (project) {
  return Tutorial.find({projects: {$in: [project]}}).exec()
}
