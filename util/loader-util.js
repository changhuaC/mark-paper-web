'use strict'
import path from 'path'
import devConfig from '../config/dev-env.conf'
import prodConfig from '../config/prod-env.conf'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import notifier from 'node-notifier'

const assetsPath = function (_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? prodConfig.assetsSubDirectory
        : devConfig.assetsSubDirectory

    return path.posix.join(assetsSubDirectory, _path)
}

const cssLoaders = function (options) {
    options = options || {}

    const cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: options.sourceMap
        }
    }

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: options.sourceMap
        }
    }

    // 创建使用 extract text plugin插件的 loader加载器字符串
    function generateLoaders (loader, loaderOptions) {
        const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }

        // 将样式提取成一个独立的文件
        // 在打包生产的时候
        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader'
            })
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
    }

    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    }
}

// 为单独的样式文件创建loader加载器，在.vue文件之外的
const styleLoaders = function (options) {
    const output = []
    const loaders = exports.cssLoaders(options)

    for (const extension in loaders) {
        const loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        })
    }

    return output
}

const createNotifierCallback = () => {
    return (severity, errors) => {
        if (severity !== 'error') {
            return
        }

        const error = errors[0]
        const filename = error.file && error.file.split('!').pop()

        notifier.notify({
            title: 'markpaperweb',
            message: severity + ': ' + error.name,
            subtitle: filename || '',
            icon: path.join(__dirname, 'logo.png')
        })
    }
}
export {cssLoaders, styleLoaders, createNotifierCallback, assetsPath}
