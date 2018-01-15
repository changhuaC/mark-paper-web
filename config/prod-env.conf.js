// 配置文件：发布环境配置
'use strict'
import path from 'path'
import baseConf from './base.conf'
import merge from 'webpack-merge'
// 合并基础配置和开发配置
const prodEnvConf = merge(baseConf, {
    NODE_ENV: '"production"',
    // 模版路径
    index: path.resolve(__dirname, '../dist/index.html'),
    // 打包路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 调试配置
    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // 文件GZIP压缩参数配置，如果要启用GZIP压缩，先要执行下面安装
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // 分割块分析报告
    bundleAnalyzerReport: true
})
export default prodEnvConf
