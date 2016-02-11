'use strict'

const API = require('../../utils/api')

// GET /suggest/languages
module.exports = function *(req, res) {
  let items = yield loadItems(req.query.q)
  res.json(items)
}

function loadItems (q) {
  return API.model('language').find()
        .limit(20).exec()
        .then(items => items.map(item => ({text: item.name, value: item.name})))
}
