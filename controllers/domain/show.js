'use strict'

const API = require('../../utils/api')

// GET /domain/:sourceDomain
module.exports = function index (req, res, next) {
  loadTutorials(req.params).then(tutorials => {
    res.render('domains/show', {
      tutorials,
      domain: req.params.sourceDomain
    })
  }).catch(next)
}

function loadTutorials (params) {
  return API.model('tutorial').find(params).sort('-createdAt').populate('creator').limit(100).exec()
}
