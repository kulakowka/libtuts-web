'use strict'

const request = require('../../utils/request')
const async = require('async')

// GET /:platform/:project
module.exports = function show (req, res, next) {
  async.parallel({
    platform (callback) {
      request(`/platform/${req.params.platform}?populate=no`, (err, response, body) => callback(err, body))
    },
    project (callback) {
      request(`/project/${req.params.project}?populate=no`, (err, response, body) => callback(err, body))
    }
  }, (err, results) => {
    if (err) return next(err)
    console.log(`/tutorial?where=${JSON.stringify({id: results.project.tutorials})}&populate=no`)
    request(`/tutorial?where=${JSON.stringify({id: results.project.tutorials})}&populate=no`, (err, response, body) => {
      if (err) return next(err)
      results.tutorials = body
      res.render('projects/show', results)
    })
  })
}
