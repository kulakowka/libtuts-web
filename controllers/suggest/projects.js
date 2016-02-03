'use strict'

const projects = [
  {id: '012031023', platform: 'npm', slug: 'redux', name: 'Redux'},
  {id: '012031024', platform: 'npm', slug: 'express', name: 'Express.js'},
  {id: '012031025', platform: 'rubygems', slug: 'device', name: 'Device'},
  {id: '012031026', platform: 'rubygems', slug: 'activerecord', name: 'Active Record'}
]

// GET /suggest/projects
module.exports = function projects (req, res, next) {
  res.json({projects})
}
