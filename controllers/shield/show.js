'use strict'

const request = require('request')

const API = require('../../utils/api')
const Project = API.model('project')

// GET /shield/:platform/:project
module.exports = function show (req, res, next) {
  loadProject(req.params)
  .then(project => {
    let url = `https://img.shields.io/badge/tutorials-${project.tutorialsCount}-brightgreen.svg`
    var resource = request(url)
    if (req.app.get('env') === 'production') {
      resource.on('response', (response) => {
        response.headers['Cache-Control'] = 'max-age=60, public'
      })
    }
    resource.pipe(res)
  })
  .catch(_err => {
    let url = `https://img.shields.io/badge/tutorials-0-brightgreen.svg`
    request.get(url).pipe(res)
  })
}

function loadProject (condition) {
  return Project.findOne(condition).select('tutorialsCount').exec()
}
