var $ = require('jquery')

module.exports.initSearchForm = function initSearchForm () {
  // Selectize
  $('form[name="search"] select[name="l"]').selectize({
    create: false,
    persist: false,
    maxItems: 10,
    load: function (query, callback) {
      if (!query.length) return callback()

      $.ajax({
        url: '/suggest/languages',
        type: 'GET',
        dataType: 'json',
        data: {
          q: query
        },
        error: function () {
          callback()
        },
        success: function (res) {
          callback(res)
        }
      })
    }
  })

  $('form[name="search"] select[name="p"]').selectize({
    persist: false,
    maxItems: 10,
    create: false,
    load: function (query, callback) {
      if (!query.length) return callback()

      $.ajax({
        url: '/suggest/platforms',
        type: 'GET',
        dataType: 'json',
        data: {
          q: query
        },
        error: function () {
          callback()
        },
        success: function (res) {
          callback(res)
        }
      })
    }
  })

  $('form[name="search"] input[name="k"]').selectize({
    delimiter: ',',
    persist: false,
    maxItems: 10,
    create: function (input) {
      return {
        value: input.toLowerCase(),
        text: input.toLowerCase()
      }
    },
    load: function (query, callback) {
      if (!query.length) return callback()

      $.ajax({
        url: '/suggest/keywords',
        type: 'GET',
        dataType: 'json',
        data: {
          q: query
        },
        error: function () {
          callback()
        },
        success: function (res) {
          callback(res)
        }
      })
    }
  })
}
