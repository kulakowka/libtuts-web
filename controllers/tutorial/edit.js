'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')

// GET /tutorial/:id
module.exports = function *(req, res, next) {
  let tutorial = yield loadTutorial(req.params)
  if (!tutorial) return notFoundError('Tutorial not found')
  res.render('tutorials/edit', {tutorial})
}

function loadTutorial (params) {
  return API.model('tutorial').findOne(params).exec()
}
