module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? process.env.VUE_APP_CONTEXT_PATH : "/",
  outputDir: `dist/${process.env.VUE_APP_MODENAME}`,
  assetsDir: "assets",
  chainWebpack: config => {
    //   config.plugin('html').tap((args) => {
    //     // args[0].title = 'Animation';
    //     // return args;
    //   });
    config.module.rule("eslint").use("eslint-loader");
  },
  // eslint-loader 是否在儲存的時候檢查
  // eslint-disable-next-line no-dupe-keys
  lintOnSave: true,
  css: {
    // 是否使用css分離外掛 ExtractTextPlugin
    extract: true,
    // 開啟 CSS source maps?是否在構建樣式地圖，false將提高構建速度
    sourceMap: true,
    // css預設器配置項
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/helpers/_var.scss";
          @import "~@/assets/helpers/_mixins.scss";
          `
      }
    }
  }
};
