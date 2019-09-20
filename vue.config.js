const path = require('path')

const lessOptions = {
  javascriptEnabled: true,
  sourceMap: false
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('rw-dispatcher-helper', path.resolve(__dirname, 'packages/rw-dispatcher-helper'))
      .set('element-ui-rw-dispatcher', path.resolve(__dirname, 'packages/element-ui-rw-dispatcher'))
      .set('iview-rw-dispatcher', path.resolve(__dirname, 'packages/iview-rw-dispatcher'))
    config.resolve.modules
      .add(path.resolve(__dirname, 'packages'))
    config.module
      .rule('less')
      .oneOf('vue-modules')
        .use('less-loader')
          .loader('less-loader')
          .options(lessOptions)
          .end()
        .end()
      .oneOf('vue')
        .use('less-loader')
          .loader('less-loader')
          .options(lessOptions)
          .end()
        .end()
      .oneOf('normal-modules')
        .use('less-loader')
          .loader('less-loader')
          .options(lessOptions)
          .end()
        .end()
      .oneOf('normal')
        .use('less-loader')
          .loader('less-loader')
          .options(lessOptions)
          .end()
        .end()
  }
}
