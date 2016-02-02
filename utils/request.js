'use strict'

const request = require('request')

module.exports = request.defaults({
  baseUrl: process.env.API_BASE_URL || 'http://localhost:1337',
  json: true,
  timeout: 1000,
  time: true
})
