var $ = require('jquery')
var autosize = require('autosize')

module.exports.initDefaultForm = function initDefaultForm () {
  // Selectize
  $('form.defaultForm select.js-default-select').selectize()

  // Textarea autosize
  autosize($('form.defaultForm textarea.js-default-textarea'))
}

module.exports.showErrors = function showErrors (form, json) {
  form.find('.form-error').remove()
  form.find('.field-error').remove()
  if (json.error) {
    showFormError(form, json.error.msg)
  }

  if (json.errors) {
    $.map(json.errors, function (error) {
      showFieldError(form, error.param, error.msg)
    })
  }
}

module.exports.clearFieldError = function clearFieldError () {
  var field = $(this).closest('.field-with-error')
  if (field.length) {
    field.removeClass('field-with-error')
    field.next('.field-error').remove()
  }
}

function showFormError (form, message) {
  var element = $('<div class="form-error">').text(message)
  form.prepend(element)
}

function showFieldError (form, param, message) {
  var element = $('<div class="field-error">').text(message)
  form.find('[name="' + param + '"]').closest('.field').addClass('field-with-error').after(element)
}
