'use strict'

const API = require('../../utils/api')

// POST /tutorial/:id
module.exports = function index (req, res, next) {
  updateTutorial(req.params, req.body).then(tutorial => {
    res.redirect(tutorial.webUrl)
  }).catch(next)
}

function updateTutorial (params, body) {
  return API.model('tutorial').update(params, body).exec()
}
