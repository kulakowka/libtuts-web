'use strict'

const fetchFromAPI = require('../../utils/fetcher').fetchFromAPI
const async = require('async')

// GET /
module.exports = function index (req, res, next) {
  async.parallel({
    projects (callback) {
      fetchFromAPI('/project?populate=platform,language&limit=10', callback)
    }
  }, (err, results) => {
    if (err) return next(err)
    res.render('projects/index', results)
  })
}
