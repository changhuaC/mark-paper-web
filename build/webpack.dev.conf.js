'use strict'
import webpack from 'webpack'
import path from 'path'
import merge from 'webpack-merge'
import devConfig from '../config/dev-env.conf'
import webpackBaseConfig from './webpack.base.conf'
import htmlWebpackPlugin from 'html-webpack-plugin'
import friendlyErrorsPlugin from 'friendly-errors-webpack-plugin'
import portfinder from 'portfinder'

const Host = process.env.Host
const port = process.env.PORT && Number(process.env.PORT)
const devWebpackConfig = merge(webpackBaseConfig, {
    module: {
        rules: [
        ]
    }
})
