const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool = 'source-map';

      config.output.devtoolModuleFilenameTemplate = info => info.resourcePath.match(/^\.\/\S*?\.vue$/)
          ? `webpack-generated:///${info.resourcePath}?${info.hash}`
          : `webpack-yourCode:///${info.resourcePath}`;

      config.output.devtoolFallbackModuleFilenameTemplate = 'webpack:///[resource-path]?[hash]';
    }
  },
})
