'use strict'

const notFoundError = require('../../utils/notFoundError')
const request = require('../../utils/request')
const async = require('async')

// GET /:platform
module.exports = function show (req, res, next) {
  async.waterfall([
    (callback) => request(`/platform/${req.params.platform}`, (err, response, body) => callback(err, body)),
    (result, callback) => {
      request(`/project?where=${JSON.stringify({platform: result.platform.id})}&populate=language,platform`, (err, response, projects) => {
        callback(err, Object.assign(result, {projects}))
      })
    }
  ], (err, results) => {
    if (err) return next(err)
    if (!results.platform) return next(notFoundError('Platform not found'))
    res.render('platforms/show', results)
  })
}
