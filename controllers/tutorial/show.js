'use strict'

const notFoundError = require('../../utils/notFoundError')
const API = require('../../utils/api')
const Tutorial = API.model('tutorial')
const Comment = API.model('comment')
const Project = API.model('project')

const async = require('async')

// GET /tutorial/:id
module.exports = function show (req, res, next) {
  async.parallel({
    tutorial: async.asyncify(() => loadTutorial(req.params.id)),
    comments: async.asyncify(() => loadComments(req.params.id))
  }, (err, results) => {
    if (err) return next(err)
    if (!results.tutorial) return next(notFoundError('Tutorial not found'))
    loadProjects(results.tutorial.projects).then(projects => {
      results.tutorial.projects = projects
      res.render('tutorials/show', results)
    }).catch(next)
  })
}

function loadTutorial (tutorial) {
  return Tutorial.findOne(tutorial).populate('languages,platforms,creator,contributors').exec()
}

function loadComments (tutorial) {
  return Comment.find({tutorial}).populate('creator').exec()
}

function loadProjects (projects) {
  return Project.find({ _id: { $in: projects } }).populate('platform').exec()
}
