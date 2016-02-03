'use strict'

module.exports = function notFoundError (text) {
  let error = new Error(text)
  error.status = 404
  return error
}
