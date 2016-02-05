'use strict'

const manifest = require('../public/rev-manifest')

module.exports = function viewHelpersMiddleware (req, res, next) {
  res.locals.currentUser = req.session.user
  res.locals.env = req.app.get('env')
  res.locals.assetPath = (path) => {
    if (req.app.get('env') !== 'production') return `/${path}`
    return `/${manifest[path] || path}`
  }
  next()
}
