var $ = require('jquery')

module.exports.initSelectize = function initTutorialForm () {
  $('select[name="languages[]"]').selectize({
    create: false,
    persist: false,
    maxItems: 10,
    load: loadData('/suggest/languages')
  })

  $('select[name="platforms[]"]').selectize({
    persist: false,
    maxItems: 10,
    create: false,
    load: loadData('/suggest/platforms')
  })

  $('select[name="projects[]"]').selectize({
    persist: false,
    valueField: 'webUrl',
    labelField: 'name',
    searchField: 'name',
    create: false,
    render: {
      item: renderProjectItem,
      option: renderProjectOption
    },
    load: loadData('/suggest/projects')
  })

  $('select[name="keywords[]"]').selectize({
    persist: false,
    create: function (input) {
      return {
        value: input,
        text: input
      }
    },
    load: loadData('/suggest/keywords')
  })
}

function renderProjectOption (item, escape) {
  return '<div class="option">' +
          '<span class="platform">' + escape(item.platform) + '</span>/' +
          '<span class="name">' + escape(item.name) + '</span>' +
          '</div>'
}
function renderProjectItem (item, escape) {
  return '<div class="item">' +
      '<span class="platform">' + escape(item.platform) + '</span>/' +
      '<span class="name">' + escape(item.name) + '</span>' +
  '</div>'
}

function loadData (url) {
  return function (query, callback) {
    if (!query.length) return callback()
    $.ajax({
      url: url,
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
}
