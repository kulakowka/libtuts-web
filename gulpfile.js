'use strict'

const gulp = require('gulp')
const requireDir = require('require-dir')
const tasks = requireDir('./tasks', { recurse: true })

const config = {
  clean: ['public'],
  watch: {
    javascripts: 'assets/js/**/*.js',
    styles: 'assets/css/**/*.styl',
    views: 'views/**/*.jade',
    preTasks: ['javascripts', 'styles']
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
    ],
    preTasks: ['images', 'javascripts', 'styles']
  }
}

for (let task in tasks) {
  let pre = config[task].preTasks || []
  config[task].isProduction = process.env.NODE_ENV === 'production'
  gulp.task(task, pre, tasks[task](config[task]))
}

gulp.task('default', ['watch'])
