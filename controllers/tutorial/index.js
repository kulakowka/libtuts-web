'use strict'

const API = require('../../utils/api')

// GET /tutorials
module.exports = function index (req, res, next) {
  loadTutorials().then(tutorials => {
    res.render('tutorials/index', {tutorials})
  }).catch(next)
}

function loadTutorials () {
  return API.model('tutorial').find().sort('-createdAt').populate('creator').limit(100).exec()
}
