'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    entryPath: path.resolve(__dirname, '../preview/main.js'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // development config
    host: 'localhost',
    port: 8080,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  buildPreview: {
    index: path.resolve(__dirname, '../distPreview/index.html'),

    entryPath: path.resolve(__dirname, '../src/index.js'),
    assetsRoot: path.resolve(__dirname, '../distPreview'),
    assetsSubDirectory: 'dist',
    assetsPublicPath: '/vui-m/',

    productionSourceMap: false,
    devtool: '#source-map',

    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    bundleAnalyzerReport: process.env.npm_config_report
  },

  buildNpm: {
    index: path.resolve(__dirname, '../distNpm/index.html'),

    entryPath: path.resolve(__dirname, '../src/index.js'),
    assetsRoot: path.resolve(__dirname, '../distNpm'),
    assetsSubDirectory: 'dist',

    productionSourceMap: false,
    devtool: '#source-map',

    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
  }
}
