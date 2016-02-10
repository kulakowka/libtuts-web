'use strict'

const API = require('../../utils/api')

// GET /platforms
module.exports = function index (req, res, next) {
  loadPlatforms().then(platforms => {
    res.render('platforms/index', {platforms})
  }).catch(next)
}

function loadPlatforms () {
  return API.model('platform').find().sort('-projectsCount').limit(200).exec()
}
