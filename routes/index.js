'use strict'

const rd = require('require-dir')
const router = require('express').Router()
const co = require('co')

const _controllers = rd('../controllers', {recurse: true})
const middlewares = rd('../middlewares', {recurse: true})

function requestHandler (callback) {
  var cb = co.wrap(callback)
  return (req, res, next) => cb(req, res, next).catch(next)
}

let controllers = {}
for (let resource in _controllers) {
  controllers[resource] = {}
  for (let action in _controllers[resource]) {
    controllers[resource][action] = requestHandler(_controllers[resource][action])
  }
}

router
.use(middlewares.viewHelpers)

router
.get('/', middlewares.searchFormData, controllers.mainpage.index)
.get('/ui', middlewares.render('ui/index'))
.post('/ui', controllers.ui.create)

.get('/about', middlewares.render('info/about'))
.get('/terms', middlewares.render('info/terms'))
.get('/privacy', middlewares.render('info/privacy'))
.get('/security', middlewares.render('info/security'))
.get('/contact', middlewares.render('info/contact'))
.get('/help', middlewares.render('info/help'))

.get('/search', middlewares.searchFormData, controllers.search.index)
.post('/auth/logout', controllers.auth.logout)
.get('/auth/recover', controllers.auth.recover)
.get('/auth/resend', controllers.auth.resend)
.get('/auth/signin', controllers.auth.signin)
.get('/auth/signup', controllers.auth.signup)
.post('/auth/login', controllers.auth.login)
.post('/auth/register', controllers.auth.register)
.get('/language/:name', controllers.language.show)
.get('/languages', controllers.language.index)
.get('/platforms', controllers.platform.index)
.get('/projects', controllers.project.index)
.get('/project/new', controllers.project.new)

.get('/suggest/keywords', controllers.suggest.keywords)
.get('/suggest/languages', controllers.suggest.languages)
.get('/suggest/platforms', controllers.suggest.platforms)
.get('/suggest/projects', controllers.suggest.projects)

.get('/tutorials', controllers.tutorial.index)
.post('/tutorials', controllers.tutorial.create)
.get('/tutorial/new', controllers.tutorial.new)
.get('/tutorial/:_id', controllers.tutorial.show)
.post('/tutorial/:_id', controllers.tutorial.update)
.get('/tutorial/:_id/edit', controllers.tutorial.edit)

.get('/domain/:sourceDomain', controllers.domain.show)

.post('/comments', controllers.comment.create)

.get('/shield/:platform/:name.svg', controllers.shield.show)

.get('/user/:username', controllers.user.show)
.get('/user/:username/tutorials', controllers.user.tutorials)
.get('/user/:username/comments', controllers.user.comments)
.get('/settings', controllers.settings.index)
.get('/:name', controllers.platform.show)
.get('/:platform/:name', controllers.project.show)

module.exports = router
