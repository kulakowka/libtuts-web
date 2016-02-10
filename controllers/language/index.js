'use strict'

const API = require('../../utils/api')

// GET /languages
module.exports = function index (req, res, next) {
  loadLanguages().then(languages => {
    res.render('languages/index', {languages})
  }).catch(next)
}

function loadLanguages () {
  return API.model('language').find().sort('-projectsCount').limit(600).exec()
}
