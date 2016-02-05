'use strict'

const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')
const size = require('gulp-size')

module.exports = function (config) {
  const dest = config.dest
  const src = config.src
  const showFiles = config.showFiles
  const progressive = config.progressive

  return () => gulp.src(src)
    .pipe(imagemin({
      progressive,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(size({showFiles}))
    .pipe(gulp.dest(dest))
}
