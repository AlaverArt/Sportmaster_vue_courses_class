const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // See available sourcemaps:
    // https://webpack.js.org/configuration/devtool/#devtool
    // and try out different ones
    devtool: 'source-map'

  }
})
