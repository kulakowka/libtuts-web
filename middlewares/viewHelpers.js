'use strict'

const manifest = require('../public/rev-manifest')
const moment = require('moment')
const numeral = require('numeral')
const config = require('../config')

module.exports = function viewHelpersMiddleware (req, res, next) {
  res.locals.currentUser = req.session.user
  res.locals.env = req.app.get('env')
  res.locals.url = req.url
  res.locals.moment = moment
  res.locals.numeral = numeral

  res.locals.meta = getDefaultMeta()
  res.locals.meta.canonical = config.baseUrl + req.url
  res.locals.meta.url = config.baseUrl + req.url

  res.locals.assetPath = (path) => {
    if (req.app.get('env') !== 'production') return `/${path}`
    return `/${manifest[path] || path}`
  }
  next()
}

function getDefaultMeta () {
  return {
    title: 'LibTuts',
    description: 'Library Tutorials helps developers find tutorials about open source libraries and keep track of their updates.',
    siteName: 'LibTuts',
    type: 'website',
    images: ['http://libtuts.com/static/images/logo.png']
  }
}
