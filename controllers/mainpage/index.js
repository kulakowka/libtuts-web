'use strict'

const request = require('../../utils/request')
const async = require('async')

// GET /
module.exports = function index (req, res, next) {
  async.parallel({
    projects (callback) {
      request('/project?populate=platform,language&limit=15&sort=createdAt asc', (err, response, body) => callback(err, body))
    },
    languages (callback) {
      request('/language?populate=no&limit=15&sort=createdAt asc', (err, response, body) => callback(err, body))
    },
    platforms (callback) {
      request('/platform?populate=no&limit=15&sort=createdAt asc', (err, response, body) => callback(err, body))
    },
    tutorials (callback) {
      request('/tutorial?populate=no&sort=createdAt desc', (err, response, body) => callback(err, body))
    }
  }, (err, results) => {
    if (err) return next(err)
    res.render('index', results)
  })
}
