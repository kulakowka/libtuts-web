'use strict'

const API = require('../../utils/api')

const Language = API.model('language')

let data = []
loadLanguages().then(languages => {
  data = languages.map(language => ({text: language.name, value: language.name})) 
})

// GET /suggest/keywords
module.exports = (req, res) => res.json(data)

function loadLanguages (q) {
  return Language.find().limit(100).exec()
}
