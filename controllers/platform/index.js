'use strict'

const API = require('../../utils/api')

// GET /platforms
module.exports = function *(req, res, next) {
  let platforms = yield loadPlatforms()
  res.render('platforms/index', {platforms})
}

function loadPlatforms () {
  return API.model('platform').find().sort('-projectsCount').limit(200).exec()
}
