'use strict'

const fetchFromAPI = require('../../utils/fetcher').fetchFromAPI
const async = require('async')

// GET /
module.exports = function index (req, res, next) {
  async.parallel({
    projects (callback) {
      fetchFromAPI('/project?populate=platform,language&limit=10&select=name,slug,tutorialsCount,description,platform,language', callback)
    },
    languages (callback) {
      fetchFromAPI('/language?limit=15&select=name,slug,projectsCount', callback)
    },
    platforms (callback) {
      fetchFromAPI('/platform?limit=15&select=name,slug,projectsCount', callback)
    },
    tutorials (callback) {
      fetchFromAPI('/tutorial?limit=10&select=id,title', callback)
    }
  }, (err, results) => {
    if (err) return next(err)
    res.render('index', results)
  })
}
