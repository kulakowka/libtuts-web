'use strict'
const config = require('../config')
const request = require('request').defaults({
  baseUrl: process.env.MAILER_HOST || 'http://localhost:3002',
  json: true,
  timeout: 1000,
  time: true
})
module.exports.sendResetPassword = function (user, token) {
  const data = {
    type: 'postbox',
    data: {
      subject: '[LibTuts] Please reset your password',
      to: user.email,
      template: 'reset-password',
      params: {
        username: user.username,
        email: user.email,
        resetUrl: config.baseUrl + '/auth/reset/' + token
      }
    },
    options: {
      attempts: 5,
      priority: 'high'
    }
  }

  return createJob(data)
}
module.exports.sendVerifyEmail = function (user, token) {
  const data = {
    type: 'postbox',
    data: {
      subject: '[LibTuts] Please verify your email address',
      to: user.email,
      template: 'verify-email',
      params: {
        username: user.username,
        email: user.email,
        verifyUrl: config.baseUrl + '/auth/verify/' + token
      }
    },
    options: {
      attempts: 5,
      priority: 'high'
    }
  }

  return createJob(data)
}

function createJob (data, callback) {
  return new Promise((resolve, reject) => {
    request({
      method: 'POST',
      url: '/job',
      body: data
    }, (err, res) => {
      if (err) return reject(err)
      resolve(res.body)
    })
  })
}
