'use strict'

const API = require('../../utils/api')

// POST /tutorial/:id
module.exports = function *(req, res, next) {
  let tutorial = yield updateTutorial(req.params, req.body)
  res.redirect(tutorial.webUrl)
}

function updateTutorial (params, body) {
  return API.model('tutorial').update(params, body).exec()
}
