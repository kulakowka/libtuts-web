'use strict'

const API = require('../../utils/api')
const Language = API.model('language')

// GET /languages
module.exports = function index (req, res, next) {
  loadLanguages().then(languages => {
    res.render('languages/index', {languages})
  }).catch(next)
}

function loadLanguages () {
  return Language.find().sort('-projectsCount').limit(200).exec()
}
