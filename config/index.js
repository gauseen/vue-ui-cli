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

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  buildPublic: {
    assetsSubDirectory: 'dist',
    assetsPublicPath: '/',
    entryPath: path.resolve(__dirname, '../src/index.js'),
    productionSourceMap: false,
  },

  buildPreview: {
    // Template for index.html
    index: path.resolve(__dirname, '../distPreview/index.html'),

    // Paths
    entryPath: path.resolve(__dirname, '../src/index.js'),
    assetsRoot: path.resolve(__dirname, '../distPreview'),
    assetsSubDirectory: 'dist',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: false,
    devtool: '#source-map',

    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },

  buildNpm: {
    // Template for index.html
    index: path.resolve(__dirname, '../distNpm/index.html'),

    // Paths
    entryPath: path.resolve(__dirname, '../src/index.js'),
    assetsRoot: path.resolve(__dirname, '../distNpm'),
    assetsSubDirectory: 'dist',
    assetsPublicPath: '/',

    productionSourceMap: false,
    devtool: '#source-map',

    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
