'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')
const async = require('async')

// GET /settings
module.exports = function show (req, res, next) {
  async.parallel({
    user: async.asyncify(() => loadUser(req.session.user._id))
  }, (err, results) => {
    if (err) return next(err)
    if (!results.user) return next(notFoundError('User not found'))
    res.render('settings/index', results)
  })
}

function loadUser (id) {
  return API.model('user').findOne({_id: id}).exec()
}
