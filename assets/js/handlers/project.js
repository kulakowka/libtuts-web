var $ = require('jquery')
var autosize = require('autosize')

module.exports.initProjectForm = function initTutorialForm () {
  // Textarea autosize
  autosize($('form[name="project"] textarea[name="description"]'))

  // Selectize
  $('form[name="project"] select[name="language"]').selectize({
    create: false
  })

  $('form[name="project"] select[name="platform"]').selectize({
    create: false
  })

  $('form[name="project"] input[name="keywords"]').selectize({
    delimiter: ',',
    persist: false,
    create: function (input) {
      return {
        value: input,
        text: input
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
