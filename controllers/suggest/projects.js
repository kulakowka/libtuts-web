'use strict'

const API = require('../../utils/api')

// GET /suggest/projects
module.exports = (req, res) => {
  loadItems().then(res.json.bind(res)).catch(_ => res.json([]))
}

function loadItems (q) {
  return API.model('project').find()
        .select('name,platform,_id')
        .limit(20).exec()
        // .then(items => items.map(item => ({text: `${item.name}`, value: `${item.name}`})))
}
