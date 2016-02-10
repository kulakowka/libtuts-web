var $ = require('jquery')
var autosize = require('autosize')

require('codemirror/mode/javascript/javascript')
require('codemirror/mode/gfm/gfm')
require('codemirror/addon/display/placeholder')
require('codemirror/addon/edit/continuelist')

var CodeMirror = require('codemirror/lib/codemirror')

function initCodeMirror (textareaElement) {
  console.log('title', $('.content').find('h1,h2,h3,h4,h5,h6').first().text())
  var editor = CodeMirror.fromTextArea(textareaElement, {
    mode: 'gfm',
    lineWrapping: true,
    viewportMargin: Infinity,
    theme: 'chrome-devtools',
    extraKeys: {
      'Enter': 'newlineAndIndentContinueMarkdownList',
      'Tab': false,
      'Alt-Tab': function (cm) {
        // var spaces = Array(cm.getOption('indentUnit') + 1).join(' ')
        cm.execCommand('insertTab')
      }
    }
  })

  return editor
}

module.exports.initDefaultForm = function initDefaultForm () {
  // Selectize
  $('form.defaultForm select.js-default-select').selectize()

  // Textarea autosize
  autosize($('form.defaultForm textarea.js-default-textarea'))

  var tutorialContent = $('form[name="tutorial"] textarea[name="content"]').get(0)
  if (tutorialContent) initCodeMirror(tutorialContent)

  var commentContent = $('form[name="comment"] textarea[name="content"]').get(0)
  if (commentContent) initCodeMirror(commentContent)

}

