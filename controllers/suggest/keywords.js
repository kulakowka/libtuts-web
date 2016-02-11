'use strict'

let keywords = 'javascript, npm, bundle, commonj-esque, commonjs, require, browser, api, app, router, restful, rest, web, sinatra, framework, express, dev ops, devops, cron, cluster, cluster cli, clustering, process configuration, keep process alive, forever-monitor, probes, profiling, forever, process manager, monitoring, ghost production, ghost, pm2.io, nodemon, supervisor, daemon, deployment, deploy, strong-pm, node.js monitoring, keymetrics, production, node-pm2, harmony, programmatic, microservice, reload, kraken, hapi, express, json, log, logs, pm2, tools, sysadmin, fault tolerant, cli, css less, variables in css, stylesheet, styles, style, bootstrap less, bootstrap css, preprocessor, parser, nested css, mixins, lesscss, less.js, less, less mixins, less css, less compiler, gradients css3, gradients css, css, css variable, css nesting, compile less'
let data = keywords.split(',').map(k => ({text: k, value: k}))

// GET /suggest/keywords
module.exports = function *(req, res) {
  res.json(data)
}
