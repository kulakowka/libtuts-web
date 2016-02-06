'use strict'

const gulp = require('gulp')
const livereload = require('gulp-livereload')

module.exports = function (config) {
  return () => {
    livereload.listen()
    gulp.watch(config.javascripts, ['javascripts'])
    gulp.watch(config.styles, ['styles'])
    gulp.watch(config.views, () => {
      livereload.reload()
    })
  }
}
