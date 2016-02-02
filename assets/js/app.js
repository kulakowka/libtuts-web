var $ = require('jquery')
var Pjax = require('pjax')
require('selectize')

// Configure pjax
new Pjax({
  // debug: true,
  analytics: function () {
    // window.ga('send', 'pageview', {page: document.location.pathname, title: document.title})
  }
})

// Handlers
var search = require('./handlers/search')
var tutorial = require('./handlers/tutorial')
var project = require('./handlers/project')

// Init all forms (it's only for prototyping and should be refactored when it will be ready to production)
function initForms () {
  search.initSearchForm()
  tutorial.initTutorialForm()
  project.initProjectForm()
}

initForms()

$(document)

  // pjax
  .on('pjax:success', initForms)
