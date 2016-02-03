'use strict'

const request = require('../../utils/request')
const async = require('async')

// GET /platforms
module.exports = function index (req, res, next) {
  async.parallel({
    platforms (callback) {
      request('/platform?populate=no&limit=100&sort=createdAt asc', (err, response, body) => callback(err, body))
    }
  }, (err, results) => {
    if (err) return next(err)
    res.render('platforms/index', results)
  })
}
