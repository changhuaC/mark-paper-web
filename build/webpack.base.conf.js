'use strict'

import path from 'path'
import devConfig from '../config/dev-env.conf'
import prodConfig from '../config/prod-env.conf'
// import HtmlWebpackPlugin from 'html-webpack-plugin'
// import ExtractTextPlugin from 'extract-text-webpack-plugin'
import {generateLoaders, assetsPath} from '../util/loader-util'

const isProduction = process.env.NODE_ENV === 'production'
const useSourceMap = isProduction ? prodConfig.productionSourceMap : devConfig.cssSourceMap
const contextPath = path.resolve(__dirname, '../') // 基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
const distPath = path.resolve(__dirname, 'dist') // 根目录路径
const srcPath = path.join(__dirname, '..', 'src') // 源码路径

export default {
    context: contextPath,
    devtool: 'source-map',
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: '[name].js',
        path: prodConfig.assetsRoot,
        publicPath: isProduction ? prodConfig.assetsPublicPath : devConfig.assetsPublicPath
    },
    resolve: {
        extensions: ['.vue', '.json', '.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, '..', 'src')
        }
    },
    module: {
        rules: [
            // 加载js文件，是用babel转码
            {
                test: /.js$/,
                use: ['babel-loader'],
                // exclude: /node_modules/,
                include: [srcPath],
                option: {
                    preset: ['@babel/preset-env']
                }
            },
            {
                test: /\.vue$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'vue-loader'
                },
                options: {
                    loaders: {
                        css: generateLoaders(),
                        postcss: generateLoaders(),
                        less: generateLoaders('less'),
                        sass: generateLoaders('sass', { indentedSyntax: true }),
                        scss: generateLoaders('sass')
                    },
                    cssSourceMap: useSourceMap,
                    cacheBusting: devConfig.cacheBusting,
                    transformToRequire: {
                        video: ['src', 'poster'],
                        source: 'src',
                        img: 'src',
                        image: 'xlink:href'
                    }
                }
            },
            // 根据文件路径加载图片文件
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: ['url-loader'],
                options: {
                    limit: 10000,
                    name: assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            // 根据文件路径加载图片文件
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: ['url-loader'],
                options: {
                    limit: 10000,
                    name: assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            // 加载字体文件
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: ['url-loader'],
                options: {
                    limit: 10000,
                    name: assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    devServer: {
        contentBase: distPath,
        historyApiFallback: true,
        inline: true
    }
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: '登录',
    //         template: pathTool.resolve(templatePath, 'tmp-index.html'),
    //         filename: 'index.html',
    //         hash: true
    //     })
    // ]
}
