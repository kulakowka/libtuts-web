'use strict'

const request = require('../../utils/request')
const async = require('async')

// GET /languages
module.exports = function index (req, res, next) {
  async.parallel({
    languages (callback) {
      request('/language?populate=no&limit=100&sort=createdAt asc', (err, response, body) => callback(err, body))
    }
  }, (err, results) => {
    if (err) return next(err)
    res.render('languages/index', results)
  })
}
