'use strict'

const gulp = require('gulp')
const size = require('gulp-size')
const sourcemaps = require('gulp-sourcemaps')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')
const livereload = require('gulp-livereload')

module.exports = function (config) {
  const dest = config.dest
  const src = config.src
  const showFiles = config.showFiles
  const compress = config.compress

  return () => gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(stylus({compress}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(size({showFiles}))
    .pipe(gulp.dest(dest))
    .pipe(livereload())
}
