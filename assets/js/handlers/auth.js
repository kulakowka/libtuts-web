var $ = require('jquery')
var forms = require('./forms')

module.exports.logout = function logout () {
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

module.exports.resetPassword = function resetPassword () {
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
    $('.sucessReset').removeClass('hidden')
  })

  return false
}

