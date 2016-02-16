'use strict'

const notAuthorizedError = require('../utils/notAuthorizedError')

module.exports = function ifUserMiddleware (req, res, next) {
  if (!req.session.user) return next(notAuthorizedError())
  next()
}
