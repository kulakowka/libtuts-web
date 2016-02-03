'use strict'

const request = require('request')

module.exports = request.defaults({
  baseUrl: process.env.API_BASE_URL || 'http://localhost:3001',
  json: true,
  timeout: 1000,
  time: true
})
