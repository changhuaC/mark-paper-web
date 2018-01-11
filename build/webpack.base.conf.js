'use strict'
import webpack from 'webpack'
import path from 'path'
import devConfig from '../config/dev-env.conf'
import prodConfig from '../config/prod-env.conf'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const isProduction = process.env.NODE_ENV === 'production'
const useSourceMap = isProduction ? prodConfig.productionSourceMap : devConfig.cssSourceMap
const contextPath = path.resolve(__dirname, '../') // 基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
const distPath = path.resolve(__dirname, 'dist') // 根目录路径
const templatePath = path.resolve(__dirname, 'template') // 模版目录路径
const srcPath = path.join(__dirname, '..', 'src') // 源码路径

// load生成器
function generateLoaders (loader, loaderOptions) {
    const loaders = [{
        loader: 'css-loader',
        options: {
            sourceMap: useSourceMap
        }
    }]

    if (loader) {
        loaders.push({
            loader: loader + '-loader',
            options: Object.assign({}, loaderOptions, {
                sourceMap: useSourceMap
            })
        })
    }
    // 将样式提取成一个独立的文件
    // 在打包生产的时候
    if (isProduction) {
        return ExtractTextPlugin.extract({
            use: loaders,
            fallback: 'vue-style-loader'
        })
    } else {
        return ['vue-style-loader'].concat(loaders)
    }
}

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
            // 加载样式文件，转换提取内部样式
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 根据文件路径加载图片文件
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: ['url-loader'],
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            // 加载字体文件
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        contentBase: distPath,
        historyApiFallback: true,
        inline: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '登录',
            template: pathTool.resolve(templatePath, 'tmp-index.html'),
            filename: 'index.html',
            hash: true
        })
    ]
}
