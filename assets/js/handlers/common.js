var $ = require('jquery')
var autosize = require('autosize')
require('selectize')

module.exports = function initCommonLibs () {
  // from a jQuery collection
  autosize($('textarea'))

  // Selectize
  $('form[name="search"] select[name="languages"]').selectize({
    create: false
  })

  $('form[name="search"] select[name="platforms"]').selectize({
    create: false
  })

  $('form[name="search"] input[name="keywords"]').selectize({
    delimiter: ',',
    persist: false,
    create: function(input) {
        return {
            value: input,
            text: input
        }
    },
    load: function(query, callback) {
      if (!query.length) return callback()
      // callback([
      //   {text: 'redux', value: 'redux'},
      //   {text: 'php', value: 'php'},
      //   {text: 'rails', value: 'rails'}
      // ])
      $.ajax({
          url: '/suggest/search',
          type: 'GET',
          dataType: 'json',
          data: {
            q: query
          },
          error: function() {
            callback()
          },
          success: function(res) {
            console.log('res', res)
            callback(res.keywords)
          }
      })
    }
  })
}