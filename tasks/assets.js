'use strict'

const gulp = require('gulp')
const size = require('gulp-size')
const newer = require('gulp-newer')

module.exports = function (config) {
  const base = config.dest
  const src = config.src
  const showFiles = config.showFiles

  return () => gulp.src(src, {base})
    .pipe(newer(base))
    .pipe(size({showFiles}))
    .pipe(gulp.dest(base))
}
