'use strict'

const fetchFromAPI = require('../../utils/fetcher').fetchFromAPI
const async = require('async')

// GET /platforms
module.exports = function index (req, res, next) {
  async.parallel({
    platforms (callback) {
      fetchFromAPI('/platform', callback)
    }
  }, (err, results) => {
    if (err) return next(err)
    res.render('platforms/index', results)
  })
}
