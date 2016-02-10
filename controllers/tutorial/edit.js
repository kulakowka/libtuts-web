'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')
const async = require('async')

// GET /tutorial/:id
module.exports = function show (req, res, next) {
  async.parallel({
    tutorial: async.asyncify(() => loadTutorial(req.params.id))
  }, (err, results) => {
    if (err) return next(err)
    if (!results.tutorial) return next(notFoundError('Tutorial not found'))
    // console.log(results)
    res.render('tutorials/edit', results)
  })
}

function loadTutorial (_id) {
  return API.model('tutorial').findOne({_id}).exec()
}

