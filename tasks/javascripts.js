'use strict'

const browserify = require('browserify')
const gulp = require('gulp')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const gutil = require('gulp-util')
const size = require('gulp-size')

// browserify middleware
// development:
//   192 kb - gzip version
//   716 kb - original file
// production:
//   30 kb - gzip version
//   87 kb - original file

// gulp
//   86 kb - original file
//   30 kb - gzip version

module.exports = function (config) {
  const dest = config.dest
  const entries = config.src
  const showFiles = config.showFiles
  const filename = config.filename

  var b = browserify({entries})

  return () => b.bundle()
    .pipe(source(filename))
    .pipe(buffer())
    .pipe(sourcemaps.init())
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('.'))
    .pipe(size({showFiles}))
    .pipe(gulp.dest(dest))
}

