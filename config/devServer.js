const devServer = {
  // host: 'localhost',
  host: "127.0.0.1",
  port: 8083, // 端口号
  https: false, // https:{type:Boolean}
  open: true, //配置自动启动浏览器  http://172.11.11.22:8888/rest/XX/
  hotOnly: true, // 热更新
  proxy: {'/localhost':{
    target: 'http://127.0.0.1:8083',
    ws: true,
    changeOrigin: true,
    pathRewrite: {
      '^/localhost': ''
    }
  },
  '/weather': {
    target: 'https://www.tianqiapi.com',
    ws: true,
    changeOrigin: true,
    pathRewrite: {
      '^/weather': ''
    }
  },
  '/yiqing': {
    target: 'https://lab.isaaclin.cn/',
    ws: true,
    changeOrigin: true,
    pathRewrite: {
      '^/yiqing': ''
    }
  }},   // 配置跨域处理,只有一个代理
  // http://211.69.26.108:8080/dianye/rest/JsonData/allcitys
  // proxy: {
  //   '/dianye/rest/JsonData/FourModual': {
  //     target: 'http://211.69.26.108:8080',   // 需要请求的地址
  //     changeOrigin: true,  // 是否跨域
  //     pathRewrite: {// 重写target中的请求地址，也就是说，在请求的时候，url用'/login'增加为'http://211.69.26.108:8000/login'
  //       '^/dianye/rest/JsonData/FourModual': '/dianye/rest/JsonData/FourModual '
  //     }
  //   },
  //   '/dianye/rest/JsonData/barChart': {
  //     target: 'http://211.69.26.108:8080',   // 需要请求的地址
  //     changeOrigin: true,  // 是否跨域
  //     pathRewrite: {// 重写target中的请求地址，也就是说，在请求的时候，url用'/login'增加为'http://211.69.26.108:8000/login'
  //       '^/dianye/rest/JsonData/barChart': '/dianye/rest/JsonData/barChart'
  //     }
  //   },
  //   '/dianye/rest/JsonData/LineChart': {
  //     target: 'http://211.69.26.108:8080',   // 需要请求的地址
  //     changeOrigin: true,  // 是否跨域
  //     pathRewrite: {// 重写target中的请求地址，也就是说，在请求的时候，url用'/login'增加为'http://211.69.26.108:8000/login'
  //       '^/dianye/rest/JsonData/LineChart': '/dianye/rest/JsonData/LineChart'
  //     }
  //   },
  //   '/dianye/rest/JsonData/OneModual': {
  //     target: 'http://211.69.26.108:8080',   // 需要请求的地址
  //     changeOrigin: true,  // 是否跨域
  //     pathRewrite: {// 重写target中的请求地址，也就是说，在请求的时候，url用'/login'增加为'http://211.69.26.108:8000/login'
  //       '^/dianye/rest/JsonData/OneModual': '/dianye/rest/JsonData/OneModual'
  //     }
  //   },
  //   '/dianye/rest/JsonData/allIndexs': {
  //     target: 'http://211.69.26.108:8080',   // 需要请求的地址
  //     changeOrigin: true,  // 是否跨域
  //     pathRewrite: {// 重写target中的请求地址，也就是说，在请求的时候，url用'/login'增加为'http://211.69.26.108:8000/login'
  //       '^/dianye/rest/JsonData/allIndexs': '/dianye/rest/JsonData/allIndexs'
  //     }
  //   },
  //   '/dianye/rest/JsonData/allTimes': {
  //     target: 'http://211.69.26.108:8080',   // 需要请求的地址
  //     changeOrigin: true,  // 是否跨域
  //     pathRewrite: {// 重写target中的请求地址，也就是说，在请求的时候，url用'/login'增加为'http://211.69.26.108:8000/login'
  //       '^/dianye/rest/JsonData/allTimes': '/dianye/rest/JsonData/allTimes'
  //     }
  //   },
  //   '/dianye/servlet/login': {
  //     target: 'http://211.69.26.108:8080',   // 需要请求的地址
  //     changeOrigin: true,  // 是否跨域
  //     pathRewrite: {// 重写target中的请求地址，也就是说，在请求的时候，url用'/login'增加为'http://127.0.0.1:8000/login'
  //       '^/dianye/servlet/login': '/dianye/servlet/login'
  //     }
  //   },
  // },
  historyApiFallback: {
    rewrites: [
      { from: /\/index/, to: '/index.html' },
      { from: /\/login/, to: '/login.html' },
      { from: /\/whole/, to: '/whole.html' },
      { from: /\/management/, to: '/management.html' },
    ]
  }
}
module.exports = devServer;