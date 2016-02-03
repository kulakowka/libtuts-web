'use strict'

var data = {
  tutorial: {},
  languages: [
    {id: '2313', slug: 'javascript', name: 'Java Script'},
    {id: '2314', slug: 'go', name: 'GO'},
    {id: '2315', slug: 'ruby', name: 'Ruby'}
  ],
  platforms: [
    {id: '2366', slug: 'npm', name: 'NPM'},
    {id: '2367', slug: 'go', name: 'GO'},
    {id: '2368', slug: 'rubygems', name: 'Rubygems'}
  ],
  projects: [
    {platform: 'npm', slug: 'redux', name: 'Redux'},
    {platform: 'npm', slug: 'express', name: 'Express.js'},
    {platform: 'rubygems', slug: 'device', name: 'Device'},
    {platform: 'rubygems', slug: 'activerecord', name: 'Active Record'}
  ]
}

// GET /tutorial/new
module.exports = function newAction (req, res, next) {
  res.render('tutorials/new', data)
}
