'use strict'
import path from 'path'
import prodConfig from '../config/prod-env.conf'
import webpack from 'webpack'
import {assetsPath, styleLoaders} from '../util/loader-util'
import merge from 'webpack-merge'
import baseWebpackConfig from './webpack.base.conf'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import OptimizeCSSPlugin from 'optimize-css-assets-webpack-plugin'
import CompressionWebpackPlugin from 'compression-webpack-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

const templatePath = path.resolve(__dirname, 'template') // 模版目录路径

const webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: styleLoaders({
            sourceMap: prodConfig.productionSourceMap,
            extract: true,
            usePostCSS: true
        })
    },
    devtool: prodConfig.productionSourceMap ? prodConfig.devtool : false,
    output: {
        path: prodConfig.assetsRoot,
        filename: assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: assetsPath('js/[id].[chunkhash].js')
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': prodConfig.NODE_ENV
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false
                }
            },
            sourceMap: prodConfig.productionSourceMap,
            parallel: true
        }),
        // 抽取单独css样式文件
        new ExtractTextPlugin({
            filename: assetsPath('css/[name].[contenthash].css'),
            // 如果设置为false，将不会把css分割成小的代码块
            // 当这些分割后的样式代码块被webpack夹在后，这些样式将会动态的由style-loader 动态的插入并替换
            // 现在设置为true 因为设置为false的时候代码分割快将会包含sourcemaps
            // 增加文件大小: https://github.com/vuejs-templates/webpack/issues/1110
            allChunks: true
        }),
        // 用这个插件压缩抽取的样式文件.
        // 从不同的组件中抽取样式，去重复.
        new OptimizeCSSPlugin({
            cssProcessorOptions: prodConfig.productionSourceMap
                ? { safe: true, map: { inline: false } }
                : { safe: true }
        }),
        // 为index.html分配正确的hash编码.
        // 更多可查看 https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: prodConfig.index,
            template: path.resolve(templatePath, 'index.tmp.html'),
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // 更多选项:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // 根据开发依赖排序依赖块
            chunksSortMode: 'dependency'
        }),
        // 保证模块id在hash以后不变
        new webpack.HashedModuleIdsPlugin(),
        // 作用域提升
        new webpack.optimize.ModuleConcatenationPlugin(),
        // 抽取第三方引用包到一个独立文件
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks (module) {
                // 把依赖的模块文件从node_modules目录里抽取出来
                return (
                    module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        // This instance extracts shared chunks from code splitted chunks and bundles them
        // in a separate chunk, similar to the vendor chunk
        // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
        new webpack.optimize.CommonsChunkPlugin({
            name: 'app',
            async: 'vendor-async',
            children: true,
            minChunks: 3
        }),

        // 复制静态文件
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: prodConfig.assetsSubDirectory,
                ignore: ['.*']
            }
        ])
    ]
})
// 启用Gzip压缩
if (prodConfig.productionGzip) {
    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(' + prodConfig.productionGzipExtensions.join('|') + ')$'),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}

if (prodConfig.bundleAnalyzerReport) {
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

export default {webpackConfig}
