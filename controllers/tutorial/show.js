'use strict'

const request = require('../../utils/request')
const async = require('async')

// GET /tutorial/:id
module.exports = function show (req, res, next) {
  async.waterfall([
    (callback) => request(`/tutorial/${req.params.id}?populate=creator,platforms,projects,languages,contributors`, (err, response, body) => callback(err, body))
  ], (err, results) => {
    if (err) return next(err)
    results.comments = []
    res.render('tutorials/show', results)
  })
}
