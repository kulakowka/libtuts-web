'use strict'

module.exports = function notAuthorizedError () {
  let error = new Error('Access allowed only for registered users')
  error.status = 401
  return error
}
