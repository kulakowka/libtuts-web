'use strict'

const gulp = require('gulp')
const requireDir = require('require-dir')
const tasks = requireDir('./tasks', { recurse: true })

const config = {
  clean: ['public'],
  assets: {
    showFiles: true,
    dest: 'public',
    src: 'assets/*'
  },
  watch: {
    javascripts: 'assets/js/**/*',
    styles: 'assets/css/**/*',
    views: 'views/**/*'
  },
  javascripts: {
    filename: 'app.js',
    showFiles: true,
    dest: 'public/js',
    src: 'assets/js/app.js'
  },
  styles: {
    compress: true,
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
    preTasks: ['assets', 'images', 'javascripts', 'styles']
  }
}

for (let task in tasks) {
  let pre = config[task].preTasks || []
  config[task].isProduction = process.env.NODE_ENV === 'production'
  gulp.task(task, pre, tasks[task](config[task]))
}

gulp.task('default', ['assets', 'images', 'javascripts', 'styles', 'watch'])
