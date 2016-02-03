'use strict'

const request = require('../../utils/request')
const async = require('async')

// GET /language/:language
module.exports = function show (req, res, next) {
  async.waterfall([
    (callback) => request(`/language/${req.params.language}?populate=no`, (err, response, body) => callback(err, body)),
    (language, callback) => request(`/project?where=${JSON.stringify({language: language.id})}&populate=language,platform`, (err, response, body) => callback(err, {language, projects: body}))
  ], (err, results) => {
    if (err) return next(err)
    res.render('languages/show', results)
  })
}
