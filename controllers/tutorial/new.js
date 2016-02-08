'use strict'

var data = {
  tutorial: {
    languages: [],
    platforms: [],
    projects: []
  }
}

// GET /tutorial/new
module.exports = function newAction (req, res, next) {
  res.render('tutorials/new', data)
}
