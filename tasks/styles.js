'use strict'

const gulp = require('gulp')
const size = require('gulp-size')
const sourcemaps = require('gulp-sourcemaps')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')
const livereload = require('gulp-livereload')
const plumber = require('gulp-plumber')
const gulpif = require('gulp-if')

module.exports = function (config) {
  const dest = config.dest
  const src = config.src
  const showFiles = config.showFiles
  const compress = config.compress
  const isDev = !config.isProduction

  return () => gulp.src(src)
    .pipe(plumber())
    .pipe(gulpif(isDev, sourcemaps.init()))
    .pipe(stylus({
      'include css': true,
      compress
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulpif(isDev, sourcemaps.write('.')))
    .pipe(size({showFiles}))
    .pipe(gulp.dest(dest))
    .pipe(livereload())
}
