'use strict'

const keywords = [
  {text: 'redux', value: 'redux'},
  {text: 'react', value: 'react'},
  {text: 'mongodb', value: 'mongodb'},
  {text: 'nodejs', value: 'nodejs'},
  {text: 'flux', value: 'flux'},
  {text: 'ruby on rails', value: 'ruby on rails'},
  {text: 'postgresql', value: 'postgresql'}
]

// GET /suggest/keywords
module.exports = function keywords (req, res, next) {
  res.json({keywords})
}
