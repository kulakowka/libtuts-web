'use strict'

const API = require('../../utils/api')

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
      {keywords: {$in: keywords}},
      {languages: {$in: languages}},
      {platforms: {$in: platforms}}
    ]}
  }

  return API.model('tutorial').find(where).sort('-createdAt').limit(100).exec()
}
