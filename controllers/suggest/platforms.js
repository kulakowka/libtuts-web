'use strict'

const API = require('../../utils/api')

const Platform = API.model('platform')

let data = []
loadPlatforms().then(platforms => {
  data = platforms.map(platform => ({text: platform.name, value: platform.name}))
})

// GET /suggest/platforms
module.exports = (req, res) => res.json(data)

function loadPlatforms (q) {
  return Platform.find().limit(100).exec()
}
