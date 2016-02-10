var $ = require('jquery')

module.exports.logout = function logout () {
  console.log('logout')
  $.ajax({
    url: '/auth/logout',
    method: 'post'
  }).done(function (html) {
    document.location.href = '/'
  })

  return false
}
