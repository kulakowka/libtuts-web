'use strict'

const notFoundError = require('../../utils/notFoundError')
const request = require('../../utils/request')
const async = require('async')

// GET /:platform/:project
module.exports = function show (req, res, next) {
  async.waterfall([
    (callback) => request(`/project/${req.params.platform}/${req.params.project}?populate=platform,language`, (err, response, body) => callback(err, body)),
    (result, callback) => {
      request(`/tutorial?where=${JSON.stringify({projects: [result.project.id]})}`, (err, response, tutorials) => {
        callback(err, Object.assign(result, {tutorials}))
      })
    }
  ], (err, results) => {
    if (err) return next(err)
    if (!results.project) return next(notFoundError('Project not found'))
    // console.log(results)
    res.render('projects/show', results)
  })
}
