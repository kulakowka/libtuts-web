'use strict'

const gulp = require('gulp')
const requireDir = require('require-dir')
const tasks = requireDir('./tasks', { recurse: true })


const config = {
  watch: {
    javascripts: 'assets/js/**/*.js',
    styles: 'assets/css/**/*.styl'
  },
  javascripts: {
    filename: 'app.js',
    showFiles: true,
    dest: 'public/js',
    src: 'assets/js/app.js'
  },
  styles: {
    compress: false,
    showFiles: true,
    dest: 'public/css',
    src: 'assets/css/app.styl'
  },
  images: {
    progressive: true,
    showFiles: true,
    dest: 'public/images',
    src: 'assets/images/**'
  },
  build: {
    showFiles: true,
    dest: 'public',
    src: [
      'public/css/app.css',
      'public/js/app.js'
    ]
  }
}

for (let task in tasks) {
  if (task === 'watch') gulp.task(task, ['javascripts', 'styles'], tasks[task](config[task]))
  else gulp.task(task, tasks[task](config[task]))
}

gulp.task('default', ['watch'])
