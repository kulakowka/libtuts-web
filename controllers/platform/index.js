'use strict'

const API = require('../../utils/api')
const Platform = API.model('platform')

// GET /platforms
module.exports = function index (req, res, next) {
  loadPlatforms().then(platforms => {
    res.render('platforms/index', {platforms})
  }).catch(next)
}

function loadPlatforms () {
  return Platform.find().limit(200).exec()
}
