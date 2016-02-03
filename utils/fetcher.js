'use strict'

const request = require('./request')

// Safe fetcher
module.exports.fetchFromAPI = function fetchFromAPI (url, callback) {
  request(url, (err, response, body) => callback(err, response.statusCode === 200 ? body : []))
}
