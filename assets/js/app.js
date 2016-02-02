var $ = require('jquery')
var Pjax = require('pjax')

// Configure pjax
new Pjax({
  // debug: true,
  analytics: function () {
    // window.ga('send', 'pageview', {page: document.location.pathname, title: document.title})
  }
})

// Handlers
var common = require('./handlers/common')

// run common when page first loaded
common()

$(document)

  // pjax
  .on('pjax:success', common)