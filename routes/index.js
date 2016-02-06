'use strict'

const rd = require('require-dir')
const r = require('express').Router()

const c = rd('../controllers', {recurse: true})
const m = rd('../middlewares', {recurse: true})

r
.use(m.searchFormData)
.use(m.viewHelpers)

r
.get('/', c.mainpage.index)
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
.get('/search', c.search.index)
.get('/suggest/keywords', c.suggest.keywords)
.get('/suggest/projects', c.suggest.projects)
.get('/tutorials', c.tutorial.index)
.get('/tutorial/:id', c.tutorial.show)
.get('/tutorial/new', c.tutorial.new)
.get('/user/:username', c.user.show)
.get('/:name', c.platform.show)
.get('/:platform/:name', c.project.show)

module.exports = r
