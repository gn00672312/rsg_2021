module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('BASE_DIR', __dirname)
    config.plugin('copy').tap(([options]) => {
      options[0].ignore.push('**/.git')
      return [options]
    })
    config.module
      .rule('vue' /* or css */)
  },
  lintOnSave: false,
  publicPath: process.env.VUE_APP_PREFIX_URL,
  devServer: {
    disableHostCheck: true,
    port: process.env.DEV_PORT,
    host: process.env.DEV_HOST
  },
  css: {
    loaderOptions: {
      // https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
      scss: {
        prependData: `            
          @import "~@/assets/scss/rsg_theme.scss";
          @import "~@/assets/scss/var.scss";
        `
      }
    }
  },
}
