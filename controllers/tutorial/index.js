'use strict'

const fetchFromAPI = require('../../utils/fetcher').fetchFromAPI
const async = require('async')

// GET /tutorials
module.exports = function index (req, res, next) {
  async.parallel({
    tutorials (callback) {
      fetchFromAPI('/tutorial?limit=10', callback)
    }
  }, (err, results) => {
    if (err) return next(err)
    res.render('tutorials/index', results)
  })
}
