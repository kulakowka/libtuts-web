var $ = require('jquery')
require('codemirror/mode/css/css')
require('codemirror/mode/htmlmixed/htmlmixed')
require('codemirror/mode/ruby/ruby')
require('codemirror/mode/javascript/javascript')
require('codemirror/mode/gfm/gfm')
require('codemirror/addon/display/placeholder')
require('codemirror/addon/edit/continuelist')
require('codemirror/addon/runmode/runmode')

var CodeMirror = require('codemirror/lib/codemirror')

module.exports.initCodeMirror = function initCodeMirror (textareaElement) {
  var editor = CodeMirror.fromTextArea(textareaElement, {
    mode: 'gfm',
    lineWrapping: true,
    viewportMargin: Infinity,
    theme: 'chrome-devtools',
    extraKeys: {
      'Enter': 'newlineAndIndentContinueMarkdownList',
      'Tab': false,
      'Alt-Tab': function (cm) {
        cm.execCommand('insertTab')
      }
    }
  })

  $('code').each(function () {
    var code = $(this)
    var text = code.text()
    CodeMirror.runMode(text, 'javascript', this)
  })

  return editor
}
