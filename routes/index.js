'use strict'

const rd = require('require-dir')
const r = require('express').Router()

const c = rd('../controllers', {recurse: true})
const m = rd('../middlewares', {recurse: true})

r
.use(m.viewHelpers)

r
.get('/', m.searchFormData, c.mainpage.index)
.get('/ui', m.render('ui/index'))
.post('/ui', c.ui.create)

.get('/about', m.render('info/about'))
.get('/terms', m.render('info/terms'))
.get('/privacy', m.render('info/privacy'))
.get('/security', m.render('info/security'))
.get('/contact', m.render('info/contact'))
.get('/help', m.render('info/help'))

.get('/search', m.searchFormData, c.search.index)
.post('/auth/logout', c.auth.logout)
.get('/auth/recover', c.auth.recover)
.get('/auth/resend', c.auth.resend)
.get('/auth/signin', c.auth.signin)
.get('/auth/signup', c.auth.signup)
.post('/auth/login', c.auth.login)
.post('/auth/register', c.auth.register)
.get('/language/:name', c.language.show)
.get('/languages', c.language.index)
.get('/platforms', c.platform.index)
.get('/projects', c.project.index)
.get('/project/new', c.project.new)

.get('/suggest/keywords', c.suggest.keywords)
.get('/suggest/languages', c.suggest.languages)
.get('/suggest/platforms', c.suggest.platforms)
.get('/suggest/projects', c.suggest.projects)

.get('/tutorials', c.tutorial.index)
.post('/tutorials', c.tutorial.create)
.get('/tutorial/new', c.tutorial.new)
.get('/tutorial/:_id', c.tutorial.show)
.post('/tutorial/:_id', c.tutorial.update)
.get('/tutorial/:_id/edit', c.tutorial.edit)

.get('/domain/:sourceDomain', c.domain.show)

.post('/comments', c.comment.create)

.get('/shield/:platform/:name.svg', c.shield.show)

.get('/user/:username', c.user.show)
.get('/user/:username/tutorials', c.user.tutorials)
.get('/user/:username/comments', c.user.comments)
.get('/settings', c.settings.index)
.get('/:name', c.platform.show)
.get('/:platform/:name', c.project.show)

module.exports = r
