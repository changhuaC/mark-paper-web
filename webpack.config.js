const webpack = require('webpack')
const pathTool = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const distPath = pathTool.resolve(__dirname, 'dist') // 根目录路径
const templatePath = pathTool.resolve(__dirname, 'template') // 模版目录路径

module.export = {
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
