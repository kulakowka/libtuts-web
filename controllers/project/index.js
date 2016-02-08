'use strict'

const API = require('../../utils/api')
const Project = API.model('project')

// GET /
module.exports = function index (req, res, next) {
  loadProjects().then(projects => {
    res.render('projects/index', {projects})
  }).catch(next)
}

function loadProjects () {
  return Project.find().limit(200).sort('-rank').exec()
}
