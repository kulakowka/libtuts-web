'use strict'

const API = require('../../utils/api')

const Tutorial = API.model('tutorial')

// GET /search
module.exports = function index (req, res, next) {
  loadTutorials(req.query).then(tutorials => {
    res.render('search/index', {tutorials})
  }).catch(next)
}

function loadTutorials (query) {
  let keywords = query.keywords
  let languages = query.languages
  let platforms = query.platforms
  let where = {}

  if (keywords || languages || platforms) {
    where = {$or: [
      {keywords: {$in: keywords ? keywords.split(',') : []}},
      {languages: {$in: languages ? languages.split(',') : []}},
      {platforms: {$in: platforms ? platforms.split(',') : []}}
    ]}
  }

  return Tutorial.find(where).sort('-createdAt').limit(100).exec()
}
