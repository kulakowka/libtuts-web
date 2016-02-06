'use strict'

const rd = require('require-dir')
const r = require('express').Router()

const c = rd('../controllers', {recurse: true})
const m = rd('../middlewares', {recurse: true})

r
.use(m.viewHelpers)

r
.get('/', m.searchFormData, c.mainpage.index)
.get('/search', m.searchFormData, c.search.index)
.get('/auth/logout', c.auth.logout)
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
.get('/tutorials', c.tutorial.index)
.get('/tutorial/:id', c.tutorial.show)
.get('/tutorial/new', c.tutorial.new)
.get('/user/:username', c.user.show)
.get('/:name', c.platform.show)
.get('/:platform/:name', c.project.show)

module.exports = r
