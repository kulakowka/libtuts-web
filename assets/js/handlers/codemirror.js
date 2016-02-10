require('codemirror/mode/css/css')
require('codemirror/mode/htmlmixed/htmlmixed')
require('codemirror/mode/ruby/ruby')
require('codemirror/mode/javascript/javascript')
require('codemirror/mode/gfm/gfm')
require('codemirror/addon/display/placeholder')
require('codemirror/addon/edit/continuelist')

var CodeMirror = require('codemirror/lib/codemirror')

module.exports.initCodeMirror = function initCodeMirror (textareaElement) {
  var editor = CodeMirror.fromTextArea(textareaElement, {
    mode: 'gfm',
    lineWrapping: true,
    minHeight: 200,
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

  return editor
}
