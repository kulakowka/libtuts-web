'use strict'

const manifest = require('../public/rev-manifest')
const moment = require('moment')
const numeral = require('numeral')

module.exports = function viewHelpersMiddleware (req, res, next) {
  res.locals.currentUser = req.session.user
  res.locals.env = req.app.get('env')
  res.locals.url = req.url
  res.locals.moment = moment
  res.locals.numeral = numeral
  res.locals.assetPath = (path) => {
    if (req.app.get('env') !== 'production') return `/${path}`
    return `/${manifest[path] || path}`
  }
  next()
}
