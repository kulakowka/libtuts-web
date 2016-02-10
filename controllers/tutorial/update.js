'use strict'

const API = require('../../utils/api')

// POST /tutorial/:id
module.exports = function index (req, res, next) {
  updateTutorial(req.params, req.body).then(tutorial => {
    res.redirect(tutorial.webUrl)
  }).catch(next)
}

function updateTutorial (params, body) {
  if (body.projects) body.projects = getProjects(body.projects)
  return API.model('tutorial').update(params, body).exec()
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
    name: data[2],
    platform: data[1]
  }
}
