var $ = require('jquery')
var autosize = require('autosize')

module.exports.initDefaultForm = function initDefaultForm () {
  // Selectize
  $('form.defaultForm select.js-default-select').selectize()

  // Textarea autosize
  autosize($('form.defaultForm textarea.js-default-textarea'))
}
