'use strict'
const utils = require('./utils')
const config = require('../config')
const _nodeEnv = process.env.NODE_ENV

// 是否为生产环境（prodPreview || prodNpm）
const isProduction = _nodeEnv === 'prodPreview' || _nodeEnv === 'prodNpm'
const sourceMapEnabled = isProduction
  ? utils.getEnvConfig('productionSourceMap')
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
