'use strict'

var dataTutorials = [
  {id: '1', title: 'Getting started redux', content: 'Text for redux tutorial'},
  {id: '2', title: 'How to create REST API', content: 'Text for api server tutorial'},
  {id: '3', title: 'Strapi - is a new node.js framework', content: 'Text for strapi tutorial'}
]

// GET /search
module.exports = function index (req, res, next) {
  res.render('search/index', {
    tutorials: dataTutorials
  })
}
