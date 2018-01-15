'use strict'
import webpack from 'webpack'
import path from 'path'
import merge from 'webpack-merge'
import devConfig from '../config/dev-env.conf'
import {styleLoaders, createNotifierCallback} from '../util/loader-util'
import webpackBaseConfig from './webpack.base.conf'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'

const templatePath = path.resolve(__dirname, 'template') // 模版目录路径
const HOST = process.env.Host || devConfig.host
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(webpackBaseConfig, {
    module: {
        rules: [
            styleLoaders({ sourceMap: devConfig.cssSourceMap, usePostCSS: true })
        ]
    },
    devTool: devConfig.devTool,
    // 开发服务器配置
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true,
        compress: true,
        host: HOST,
        port: PORT || devConfig.port,
        open: devConfig.autoOpenBrowser,
        overlay: devConfig.errorOverlay
            ? { warnings: false, errors: true }
            : false,
        publicPath: devConfig.assetsPublicPath,
        proxy: devConfig.proxyTable,
        quiet: true, // 静默启动，针对FriendlyErrorsPlugin友好错误提示插件
        watchOptions: {
            poll: devConfig.poll
        }
    },
    // 插件配置
    plugins: [
        new webpack.DefinePlugin({
            'process.env': devConfig.NODE_ENV
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            title: '登录',
            template: path.resolve(templatePath, 'index.tmp.html'),
            filename: 'index.html',
            hash: true
        }),
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [`Your application is running here: http://${HOST}:${PORT}`]
            },
            onErrors: devConfig.notifyOnErrors
                ? createNotifierCallback()
                : undefined
        })

    ]
})
export default {devWebpackConfig}
