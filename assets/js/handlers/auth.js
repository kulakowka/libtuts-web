var $ = require('jquery')
var forms = require('./forms')

module.exports.logout = function logout () {
  console.log('logout')
  $.ajax({
    url: '/auth/logout',
    method: 'post',
    dataType: 'json'
  }).done(function (json) {
    document.location.href = '/'
  })

  return false
}

module.exports.signin = function signin () {
  console.log('signin')
  var form = $(this)
  var data = form.serialize()

  $.ajax({
    url: form.attr('action'),
    method: 'post',
    data: data,
    dataType: 'json'
  }).done(function (json) {
    if (json.error || json.errors) return forms.showErrors(form, json)
    document.location.href = json.webUrl
  })

  return false
}

module.exports.signup = function signup () {
  console.log('signup')
  var form = $(this)
  var data = form.serialize()

  $.ajax({
    url: form.attr('action'),
    method: 'post',
    data: data,
    dataType: 'json'
  }).done(function (json) {
    if (json.error || json.errors) return forms.showErrors(form, json)
    document.location.href = json.webUrl
  })

  return false
}

module.exports.recoverPassword = function recoverPassword () {
  console.log('recoverPassword')
  var form = $(this)
  var data = form.serialize()

  $.ajax({
    url: form.attr('action'),
    method: 'post',
    data: data,
    dataType: 'json'
  }).done(function (json) {
    if (json.error || json.errors) return forms.showErrors(form, json)
    form.remove()
    $('.sucessRecover').removeClass('hidden')
  })

  return false
}
