'use strict'

const fetchFromAPI = require('../../utils/fetcher').fetchFromAPI
const async = require('async')

// GET /languages
module.exports = function index (req, res, next) {
  async.parallel({
    languages (callback) {
      fetchFromAPI('/language', callback)
    }
  }, (err, results) => {
    if (err) return next(err)
    res.render('languages/index', results)
  })
}
