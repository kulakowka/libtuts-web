'use strict'

const API = require('../../utils/api')

// POST /tutorials
module.exports = function index (req, res, next) {
  createTutorial(req.body).then(tutorial => {
    res.redirect(tutorial.webUrl)
  }).catch(next)
}

function createTutorial (body) {
  if (body.projects) body.projects = getProjects(body.projects)
  return API.model('tutorial').create(body).exec()
}

function getProjects (projects) {
  switch (typeof projects) {
    case 'string':
      return [getProject(projects)]
    case 'object':
      return projects.map(getProject)
    default:
      return []
  }
}

// TODO: надо еще улучшить алгоритм
function getProject (path) {
  let data = path.split('/')

  return {
    name: data[1],
    platform: data[2]
  }
}
