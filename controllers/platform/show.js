'use strict'

const request = require('../../utils/request')
const async = require('async')

// GET /:platform
module.exports = function show (req, res, next) {
  async.waterfall([
    (callback) => request(`/platform/${req.params.platform}?populate=no`, (err, response, body) => callback(err, body)),
    (platform, callback) => request(`/project?where=${JSON.stringify({platform: platform.id})}&populate=language,platform`, (err, response, body) => callback(err, {platform, projects: body}))
  ], (err, results) => {
    if (err) return next(err)
    res.render('platforms/show', results)
  })
}
