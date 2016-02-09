'use strict'

module.exports = function searchFormData (req, res, next) {
  res.locals.search = req.query
  next()
}
