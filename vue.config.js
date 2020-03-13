/**
 * *@2019-11-07
 * *@author yqf
 * *@describe vue-cli 3.x配置文件
 */
// const path = require('path');
// const vConsolePlugin = require('vconsole-webpack-plugin'); // 引入 移动端模拟开发者工具 插件 （另：https://github.com/liriliri/eruda）
const CompressionPlugin = require('compression-webpack-plugin'); //Gzip
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //Webpack包文件分析器
// const baseUrl = process.env.NODE_ENV === "production" ? "/static/" : "/"; //font scss资源路径 不同环境切换控制
let devServer = require("./config/devServer.js");
let cssConfig = require("./config/cssConfig.js");
module.exports = {
  //基本路径
  //baseUrl: './',//vue-cli3.3以下版本使用
  publicPath: '/',//vue-cli3.3+新版本使用
  //输出文件目录
  outputDir: './dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  //build时候开启gzip
  // eslint-disable-next-line no-unused-vars
  configureWebpack:config=>{
    if(process.env.NODE_ENV === 'production'){
      return{
        plugins: [
          new CompressionPlugin({
            test:/\.js$|\.html$|.\css/, //匹配文件名
            threshold: 10240,//对超过10k的数据压缩
            deleteOriginalAssets: false //不删除源文件
          })
        ]
      }
    }
  },
  //以多页模式构建应用程序。
  pages: {
    index: {
      // page 的入口
      entry: './src/pages/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'index page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    whole: {
      // page 的入口
      entry: './src/pages/whole/whole.js',
      // 模板来源
      template: 'public/whole.html',
      // 在 dist/index.html 的输出
      filename: 'whole.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'whole page',
      chunks: ['chunk-vendors', 'chunk-common', 'whole']
    },
    login: {
      // page 的入口
      entry: './src/pages/login/login.js',
      // 模板来源
      template: 'public/login.html',
      // 在 dist/index.html 的输出
      filename: 'login.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'login page',
      chunks: ['chunk-vendors', 'chunk-common', 'login']
    },
    management: {
      // page 的入口
      entry: './src/pages/management/management.js',
      // 模板来源
      template: 'public/management.html',
      // 在 dist/index.html 的输出
      filename: 'management.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'management.html',
      chunks: ['chunk-vendors', 'chunk-common', 'management']
    }
  },
  //是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  //是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建，在适当的时候开启几个子进程去并发的执行压缩
  parallel: require('os').cpus().length > 1,
  //生产环境是否生成 sourceMap 文件，一般情况不建议打开
  productionSourceMap: false,
  //调整 webpack 配置 https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
  css: cssConfig,
  // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
  devServer: devServer,
  // 第三方插件配置 https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
  // pluginOptions:""
};