'use strict'

const API = require('../../utils/api')

// GET /
module.exports = function *(req, res, next) {
  let projects = yield loadProjects()
  res.render('projects/index', {projects})
}

function loadProjects () {
  return API.model('project').find().sort('-rank').exec()
}
