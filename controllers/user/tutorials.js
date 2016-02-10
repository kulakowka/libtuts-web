'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')
const async = require('async')

// GET /user/:username/comments
module.exports = function show (req, res, next) {
  async.waterfall([
    loadUser(req.params),
    loadTutorials
  ], (err, results) => {
    if (err) return next(err)
    if (!results.user) return next(notFoundError('User not found'))
    console.log(results)
    res.render('users/tutorials', results)
  })
}

function loadUser (params) {
  return (callback) => {
    API.model('user').findOne(params).exec().then(user => callback(null, user))
  }
}

function loadTutorials (user, callback) {
  API.model('tutorial').find({creator: user._id})
  .sort('-createdAt').populate('creator').exec()
  .then(tutorials => callback(null, {
    user,
    tutorials
  }))
}
