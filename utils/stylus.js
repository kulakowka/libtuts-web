var stylus = require('stylus')
var path = require('path')

function compile (str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    // .set('include css', true)
}

module.exports = stylus.middleware({
  src: path.resolve(__dirname, '../assets'),
  dest: path.resolve(__dirname, '../public'),
  compile: compile
})