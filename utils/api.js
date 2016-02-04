'use strict'

const options = {
  baseUrl: process.env.API_BASE_URL || 'http://localhost:3001',
  json: true,
  timeout: 1000,
  time: true
}

module.exports = require('rest-api-request')(options)
