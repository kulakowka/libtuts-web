'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')
const async = require('async')

// GET /tutorial/:id
module.exports = function show (req, res, next) {
  async.parallel({
    tutorial: async.asyncify(() => loadTutorial(req.params))
  }, (err, results) => {
    if (err) return next(err)
    if (!results.tutorial) return next(notFoundError('Tutorial not found'))
    res.render('tutorials/edit', results)
  })
}

function loadTutorial (params) {
  return API.model('tutorial').findOne(params).exec()
}
