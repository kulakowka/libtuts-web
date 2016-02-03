'use strict'

const request = require('../../utils/request')
const async = require('async')

// GET /tutorial/:id
module.exports = function show (req, res, next) {
  async.waterfall([
    (callback) => request(`/tutorial/${req.params.id}?populate=createdBy,platforms,projects,languages,contributors`, (err, response, body) => callback(err, body)),
    (tutorial, callback) => request(`/project?where=${JSON.stringify({id: tutorial.projects.map(p => p.id)})}&populate=platform`, (err, response, body) => {
      tutorial.projects = body
      callback(err, {tutorial})
    })
  ], (err, results) => {
    if (err) return next(err)
    results.comments = []
    res.render('tutorials/show', results)
  })
}
