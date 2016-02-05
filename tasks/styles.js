'use strict'

const gulp = require('gulp')
const size = require('gulp-size')
const sourcemaps = require('gulp-sourcemaps')
const stylus = require('gulp-stylus')

module.exports = function (config) {
  const dest = config.dest
  const src = config.src
  const showFiles = config.showFiles
  const compress = config.compress

  return () => gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(stylus({compress}))
    .pipe(sourcemaps.write('.'))
    .pipe(size({showFiles}))
    .pipe(gulp.dest(dest))
}
