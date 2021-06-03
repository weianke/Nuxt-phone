const axios = require("axios");

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "visney",
    meta: [
      { name: "renderer", content: "webkit" },
      { name: "force-rendering", content: "webkit" },
      { "http-equiv": "X-UA-Compatible", content: "IE=Edge,chrome=1" },
      { name: "baidu-site-verification", content: "mREHhDF8nW" },

      /*以上是设置双核浏览器默认状态下使用极速模式打开*/
      { charset: "utf-8" },
      { hid: "description", name: "description", content: "卫诗理" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, user-scalable=no"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src:
          "http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"
      },
      {
        src:
          "http://api.map.baidu.com/api?v=2.0&ak=MDdqxkqhQzfdBzfu2tfGiidGbHgTfGrB"
      }
    ]
  },
  css: ["~assets/css/reset.css"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  modules: ["@nuxtjs/proxy"],
  /*
   ** proxy
   */
  proxy: {
    "/mock/": {
      target: "http://localhost:3000/",
      changeOrigin: true,
      pathRewrite: { "^": "" }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /**
     * 将查看源代码中的css采用外部引入方式
     */
    extractCSS: {
      allChunks: true
    },
    vender: ["axios"],

    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  //设置缓存
  cache: true,
  //禁止预加载效果
  performance: {
    prefetch: false
  }
};
