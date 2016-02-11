'use strict'

const API = require('../../utils/api')

// GET /languages
module.exports = function *(req, res, next) {
  let languages = yield loadLanguages()
  res.render('languages/index', {languages})
}

function loadLanguages () {
  return API.model('language').find().sort('-projectsCount').limit(600).exec()
}
