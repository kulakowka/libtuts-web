var $ = require('jquery')

module.exports.initSearchForm = function initSearchForm () {
  // Selectize
  $('form[name="search"] select[name="languages"]').selectize({
    delimiter: ',',
    create: false
  })

  $('form[name="search"] select[name="platforms"]').selectize({
    delimiter: ',',
    create: false
  })

  $('form[name="search"] input[name="keywords"]').selectize({
    delimiter: ',',
    persist: false,
    create: function (input) {
      return {
        value: input.toLowerCase(),
        text: input.toLowerCase()
      }
    },
    load: function (query, callback) {
      if (!query.length) return callback()

      $.ajax({
        url: '/suggest/search',
        type: 'GET',
        dataType: 'json',
        data: {
          q: query
        },
        error: function () {
          callback()
        },
        success: function (res) {
          callback(res.keywords)
        }
      })
    }
  })
}
