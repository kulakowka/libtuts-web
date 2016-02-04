'use strict'

const notFoundError = require('../../utils/notFoundError')
const request = require('../../utils/request')
const async = require('async')

// GET /language/:language
module.exports = function show (req, res, next) {
  async.waterfall([
    (callback) => request(`/language/${req.params.language}`, (err, response, body) => callback(err, body)),
    (result, callback) => {
      request(`/project?where=${JSON.stringify({language: result.language.id})}&populate=language,platform`, (err, response, projects) => {
        callback(err, Object.assign(result, {projects}))
      })
    }
  ], (err, results) => {
    if (err) return next(err)
    if (!results.language) return next(notFoundError('Language not found'))
    res.render('languages/show', results)
  })
}
