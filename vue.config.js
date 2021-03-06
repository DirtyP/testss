module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    },
    devServer: {
            disableHostCheck: false,
            // host: "192.168.0.105",
            port: 8080,
            https: false,
            hotOnly: false,
            proxy: null
        },
  }
}