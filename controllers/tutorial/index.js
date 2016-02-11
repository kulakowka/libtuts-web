'use strict'

const API = require('../../utils/api')

// GET /tutorials
module.exports = function *(req, res, next) {
  let tutorials = yield loadTutorials()
  res.render('tutorials/index', {tutorials})
}

function loadTutorials () {
  return API.model('tutorial').find().sort('-createdAt').populate('creator').limit(100).exec()
}
