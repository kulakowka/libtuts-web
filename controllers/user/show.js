'use strict'

const dataUser = {
  kulakowka: {username: 'kulakowka', fullName: 'Anton Kulakov'},
  gaeron: {username: 'gaeron', fullName: 'Dan Abramov'},
  tj: {username: 'tj', fullName: 'TJ Holowaychuk'}
}

const dataUserTutorials = {
  kulakowka: [
    {id: '1', title: 'Getting started redux', content: 'Text for redux tutorial'}
  ],
  gaeron: [
    {id: '1', title: 'Getting started redux', content: 'Text for redux tutorial'},
    {id: '2', title: 'How to create REST API', content: 'Text for api server tutorial'}
  ],
  tj: [
    {id: '1', title: 'Getting started redux', content: 'Text for redux tutorial'},
    {id: '2', title: 'How to create REST API', content: 'Text for api server tutorial'},
    {id: '3', title: 'Strapi - is a new node.js framework', content: 'Text for strapi tutorial'}
  ]
}

// GET /user/:username
module.exports = function show (req, res, next) {
  const user = dataUser[req.params.username]
  const tutorials = dataUserTutorials[req.params.username]
  res.render('users/show', {user, tutorials})
}
