// 配置文件：开发环境配置
'use strict'
import baseConf from './base.conf'
import merge from 'webpack-merge'

// 合并基础配置和开发配置
const devEnvConf = merge(baseConf, {
    NODE_ENV: '"development"',
    // 代理配置表
    proxyTable: {},
    // dev-webpack-server 配置参数
    host: 'localhost', // 服务域，可以被 process.env.HOST 参数覆盖
    port: 9000, // 端口,可以被 process.env.PORT覆盖，如果这个端口被使用，会自动找一个空闲端口
    autoOpenBrowser: true, // 是否自动打开浏览器
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    historyApiFallback: true,
    // 代码检查配置
    useEslint: true,
    showEslintErrorsInOverlay: false,
    // 调试配置
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
})

export default devEnvConf
