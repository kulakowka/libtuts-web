var $ = require('jquery')
var codemirror = require('./codemirror')

module.exports.initTutorialForm = function initTutorialForm () {
  var textarea = $('.tutorialForm textarea').get(0)
  if (textarea) codemirror.initCodeMirror(textarea)
}

// module.exports.onFormSubmit = function onFormSubmit () {
//   var form = $(this)
//   var data = form.serialize()
//   var commentsList = $('.commentsList')

//   $.ajax({
//     url: form.attr('action'),
//     method: 'post',
//     data: data,
//     dataType: 'html'
//   }).done(function (html) {
//     form.trigger('reset')
//     commentsList.prepend(html)
//   })

//   return false
// }
