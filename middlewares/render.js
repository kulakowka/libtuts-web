'use strict'

module.exports = function searchFormData (view) {
  return (req, res, next) => {
    res.render(view)
  }
}