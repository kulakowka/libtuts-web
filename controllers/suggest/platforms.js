'use strict'

const API = require('../../utils/api')

// GET /suggest/platforms
module.exports = function *(req, res) {
  let items = yield loadItems(req.query.q)
  res.json(items)
}

function loadItems (q) {
  return API.model('platform').find()
        .limit(20).exec()
        .then(items => items.map(item => ({text: item.name, value: item.name})))
}
