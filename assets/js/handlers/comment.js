var $ = require('jquery')
var codemirror = require('./codemirror')
var _editor = null

module.exports.initCommentForm = function initCommentForm () {
  var textarea = $('.commentForm textarea').get(0)
  if (textarea) _editor = codemirror.initCodeMirror(textarea)
}

module.exports.onFormSubmit = function onFormSubmit () {
  var form = $(this)
  var data = form.serialize()
  var commentsList = $('.commentsList')

  $.ajax({
    url: form.attr('action'),
    method: 'post',
    data: data,
    dataType: 'html'
  }).done(function (html) {
    _editor.setValue('')
    commentsList.prepend(html)
  })

  return false
}
