'use strict'

const request = require('./request')

// Safe fetcher
module.exports.fetchFromAPI = function fetchFromAPI (url, callback) {
  request(url, (err, response, body) => {
    if (err) return callback(new Error('API Server is not available'))
    callback(err, response.statusCode === 200 ? body : [])
  })
}
