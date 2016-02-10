var $ = require('jquery')
var Pjax = require('pjax')
require('selectize')

// Configure pjax
if ($('body.production').length) {
  new Pjax({
    // debug: true,
    analytics: function () {
      // window.ga('send', 'pageview', {page: document.location.pathname, title: document.title})
    }
  })
}

// Handlers
var forms = require('./handlers/forms')
var selectize = require('./handlers/selectize')
var comment = require('./handlers/comment')
var tutorial = require('./handlers/tutorial')
var dropdown = require('./handlers/dropdown')
var auth = require('./handlers/auth')

// Init all forms (it's only for prototyping and should be refactored when it will be ready to production)
function initForms () {
  selectize.initSelectize()
  forms.initDefaultForm()
  comment.initCommentForm()
  tutorial.initTutorialForm()
}

initForms()

$(document)

  // pjax
  .on('pjax:success', initForms)

  // dropdown
  .on('click', '.dropdown .handle', dropdown.onHandleClick)

  // auth
  .on('click', '.js-button-logout', auth.logout)

  // comments
  .on('submit', '.commentForm', comment.onFormSubmit)
