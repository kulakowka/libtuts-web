'use strict'

module.exports = function searchFormData (req, res, next) {
  let languages = req.query.l || []
  let platforms = req.query.p || []

  res.locals.search = {
    l: languages.constructor === Array ? languages : [languages],
    p: platforms.constructor === Array ? platforms : [platforms],
    k: req.query.k
  }
  next()
}
