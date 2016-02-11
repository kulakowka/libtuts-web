'use strict'

const API = require('../../utils/api')

// POST /tutorials
module.exports = function *(req, res, next) {
  let creator = req.session.user
  req.body.creator = creator
  req.body.contributors = [creator]
  let tutorial = yield createTutorial(req.body)
  res.redirect(tutorial.webUrl)
}

function createTutorial (body) {
  return API.model('tutorial').create(body).exec()
}
