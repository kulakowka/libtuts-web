'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')
const async = require('async')

// GET /user/:username
module.exports = function show (req, res, next) {
  async.parallel({
    user: async.asyncify(() => loadUser(req.params))
  }, (err, results) => {
    if (err) return next(err)
    if (!results.user) return next(notFoundError('User not found'))
    res.render('users/show', results)
  })
}

function loadUser (params) {
  return API.model('user').findOne(params).exec()
}
