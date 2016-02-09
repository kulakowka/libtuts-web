'use strict'

const async = require('async')
const API = require('../../utils/api')

// GET /project/new
module.exports = function newAction (req, res, next) {
  async.parallel({
    languages: async.asyncify(loadLanguages),
    platforms: async.asyncify(loadPlatforms)
  }, (err, results) => {
    if (err) return next(err)
    results.project = {}
    res.render('projects/new', results)
  })
}

function loadLanguages () {
  return API.model('language').find().sort('-projectsCount').limit(200).exec()
}

function loadPlatforms () {
  return API.model('platform').find().sort('-projectsCount').limit(200).exec()
}
