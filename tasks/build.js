'use strict'

const gulp = require('gulp')
const rev = require('gulp-rev')
const size = require('gulp-size')

module.exports = function (config) {
  const base = config.dest
  const src = config.src
  const showFiles = config.showFiles

  return () => gulp.src(src, {base})
    .pipe(rev())
    .pipe(size({showFiles}))
    .pipe(gulp.dest(base))
    .pipe(rev.manifest())
    .pipe(size({showFiles}))
    .pipe(gulp.dest(base))
}
