'use strict'

const API = require('../../utils/api')

// GET /
module.exports = function index (req, res, next) {
  loadProjects().then(projects => {
    res.render('projects/index', {projects})
  }).catch(next)
}

function loadProjects () {
  return API.model('project').find().sort('-rank').exec()
}
