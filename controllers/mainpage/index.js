'use strict'

const fetchFromAPI = require('../../utils/fetcher').fetchFromAPI
const async = require('async')

// GET /
module.exports = function index (req, res, next) {
  async.parallel({
    projects (callback) {
      fetchFromAPI('/project?populate=platform,language&limit=2', callback)
    },
    languages (callback) {
      fetchFromAPI('/language?limit=2', callback)
    },
    platforms (callback) {
      fetchFromAPI('/platform?limit=2', callback)
    },
    tutorials (callback) {
      fetchFromAPI('/tutorial?limit=2', callback)
    }
  }, (err, results) => {
    if (err) return next(err)
    res.render('index', results)
  })
}
