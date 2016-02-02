var $ = require('jquery')
var autosize = require('autosize')

module.exports.initTutorialForm = function initTutorialForm () {
  // Textarea autosize
  autosize($('form[name="tutorial"] textarea[name="content"]'))

  // Selectize
  $('form[name="tutorial"] select[name="languages"]').selectize({
    create: false
  })

  $('form[name="tutorial"] select[name="platforms"]').selectize({
    create: false
  })

  $('form[name="tutorial"] select[name="projects"]').selectize({
    persist: false,
    valueField: 'id',
    labelField: 'name',
    searchField: 'name',
    create: function (input) {
      return {
        id: new Date().getTime(),
        value: input,
        name: input,
        platform: 'not found',
        text: input
      }
    },
    render: {
      option: function (item, escape) {
        return '<div class="option_project">' +
            '<div class="title">' +
                '<span class="name">' + escape(item.name) + '</span>' +
            '</div>' +
            '<div class="description">' + escape(item.platform) + '</div>' +
        '</div>'
      }
    },
    load: function (query, callback) {
      if (!query.length) return callback()

      $.ajax({
        url: '/suggest/projects',
        type: 'GET',
        dataType: 'json',
        data: {
          q: query
        },
        error: function () {
          callback()
        },
        success: function (res) {
          callback(res.projects)
        }
      })
    }
  })

  $('form[name="tutorial"] input[name="keywords"]').selectize({
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
