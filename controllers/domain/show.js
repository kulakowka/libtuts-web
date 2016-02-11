'use strict'

const API = require('../../utils/api')

// GET /domain/:sourceDomain
module.exports = function *(req, res, next) {
  let tutorials = yield loadTutorials(req.params)
  res.render('domains/show', {
    tutorials,
    domain: req.params.sourceDomain
  })
}

function loadTutorials (params) {
  return API.model('tutorial').find(params).sort('-createdAt').populate('creator').limit(100).exec()
}
