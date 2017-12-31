'use strict'
import webpack from 'webpack'
import path from 'path'
import devConfig from '../config/dev-env.conf'
import prodConfig from '../config/prod-env.conf'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const distPath = path.resolve(__dirname, 'dist') // 根目录路径
const templatePath = path.resolve(__dirname, 'template') // 模版目录路径

export default {
    devtool: 'source-map',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: distPath
    },
    module: {
        rules: [
            // 加载js文件，是用babel转码
            {
                test: /.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
                option: {
                    preset: ['@babel/preset-env']
                }
            },
            {
                test: /\.vue$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'vue-loader'
                }
            },
            // 加载样式文件，转换提取内部样式
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 根据文件路径加载图片文件
            {
                test: /.(png|svg|jpg|gif|)$/,
                use: [
                    'file-loader'
                ]
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
