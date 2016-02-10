'use strict'

const API = require('../../utils/api')

// POST /tutorials
module.exports = function index (req, res, next) {
  let creator = req.session.user
  req.body.creator = creator
  req.body.contributors = [creator]
  createTutorial(req.body).then(tutorial => {
    res.redirect(tutorial.webUrl)
  }).catch(next)
}

function createTutorial (body) {
  return API.model('tutorial').create(body).exec()
}
