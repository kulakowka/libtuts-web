'use strict'

const _ = require('lodash')

const languages = [
  {id: '2313', slug: 'javascript', name: 'Java Script'},
  {id: '2314', slug: 'go', name: 'GO'},
  {id: '2315', slug: 'ruby', name: 'Ruby'}
]

const platforms = [
  {id: '2366', slug: 'npm', name: 'NPM'},
  {id: '2367', slug: 'go', name: 'GO'},
  {id: '2368', slug: 'rubygems', name: 'Rubygems'}
]

module.exports = function searchFormData (req, res, next) {
  const keywords = req.query.keywords
  res.locals.search = {
    keywords,
    platforms: platforms.map(platform => {
      platform.selected = req.query.platforms === platform.slug || _.indexOf(req.query.platforms, platform.slug) !== -1
      return platform
    }),
    languages: languages.map(language => {
      language.selected = req.query.languages === language.slug || _.indexOf(req.query.languages, language.slug) !== -1
      return language
    })
  }
  next()
}
