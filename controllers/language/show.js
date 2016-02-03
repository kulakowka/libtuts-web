'use strict'

const notFoundError = require('../../utils/notFoundError')
const request = require('../../utils/request')
const async = require('async')

// GET /language/:language
module.exports = function show (req, res, next) {
  async.waterfall([
    (callback) => request(`/language/${req.params.language}`, (err, response, body) => callback(err, body)),
    // (language, callback) => request(`/project?where=${JSON.stringify({language: language.id})}&populate=language,platform`, (err, response, body) => callback(err, {language, projects: body}))
  ], (err, results) => {
    if (err) return next(err)
    if (!results.language) return next(notFoundError('Language not found'))
    res.render('languages/show', results)
  })
}
