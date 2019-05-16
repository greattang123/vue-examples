// vue.conofig.js
module.exports = {
  // 开发环境配置
  devServer: {
    //默认端口
    port: 8081,
    //跨域代理设置
    proxy: {
      //跨域请求相对路径，当以根路径发出请求，执行以下配置
      "/api": {
        //目标地址，即开发测试后端主机地址
        target: "http://localhost:8080/",
        //修改请求header中来源为目标主机地址，实现跨域
        changeOrigin: true
      }
    }
  },
  //生成环境配置
  //默认按部署在服务器根路径配置
  //编译时资源按相对路径声明，可部署在任意路径
  publicPath: "./",
  productionSourceMap: false
};
