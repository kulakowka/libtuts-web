'use strict'

const API = require('../../utils/api')
const Tutorial = API.model('tutorial')

// GET /tutorials
module.exports = function index (req, res, next) {
  loadTutorials().then(tutorials => {
    res.render('tutorials/index', {tutorials})
  }).catch(next)
}

function loadTutorials () {
  return Tutorial.find().sort('-createdAt').limit(10).exec()
}
