'use strict'

const API = require('../../utils/api')

// GET /suggest/projects
module.exports = function *(req, res) {
  let items = yield loadItems(req.query.q)
  res.json(items)
}

function loadItems (q) {
  return API.model('project').find()
        .select('name platform')
        .limit(20).exec()
        .then(items => items.map(item => ({text: getProjectId(item), value: getProjectId(item)})))
}

function getProjectId (project) {
  return `${project.platform}/${project.name}`
}
