var $ = require('jquery')

module.exports.onHandleClick = function onHandleClick (event) {
  var handle = $(this)
  var dropdown = handle.closest('.dropdown')

  $('.dropdown').removeClass('open')
  dropdown.addClass('open')

  $(document).one('click', function () {
    dropdown.removeClass('open')
  })

  return false
}
