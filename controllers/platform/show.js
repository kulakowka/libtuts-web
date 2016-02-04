'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')
const Platform = API.model('platform')
const Project = API.model('project')

// GET /:platform
module.exports = function show (req, res, next) {
  loadPlatform(req.params.platform).then(platform => {
    if (!platform) return next(notFoundError('Platform not found'))
    return loadProjects(platform._id).then(projects => {
      res.render('platforms/show', {
        platform,
        projects
      })
    })
  }).catch(next)
}

function loadPlatform (platform) {
  return Platform.findOne(platform).select('_id,slug,name,projectsCount,tutorialsCount').exec()
}

function loadProjects (platform) {
  return Project.find({platform}).populate('language,platform').limit(2).exec()
}
