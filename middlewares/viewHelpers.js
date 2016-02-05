'use strict'

const marked = require('marked')
const manifest = require('../public/rev-manifest')
const highlightjs = require('highlight.js')

marked.setOptions({
  // renderer: new marked.Renderer(),
  gfm: true,
  tables: false,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang, callback) {
    return highlightjs.highlightAuto(code).value
  }
})

module.exports = function viewHelpersMiddleware (req, res, next) {
  res.locals.currentUser = req.session.user
  res.locals.marked = marked
  res.locals.env = req.app.get('env')
  res.locals.assetPath = (path) => {
    if (req.app.get('env') !== 'production') return `/${path}`
    return `/${manifest[path] || path}`
  }
  next()
}
