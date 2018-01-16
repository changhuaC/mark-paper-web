
'use strict'
import Webpack from 'webpack'
import devConfig from '../config/dev-env.conf'
import WebpackDevServer from 'webpack-dev-server'
import devWebpackConfig from '../build/webpack.dev.conf'

const compiler = Webpack(devWebpackConfig)
const devServerOptions = Object.assign({}, devWebpackConfig.devServer, {
    stats: {
        colors: true
    }
})
const server = new WebpackDevServer(compiler, devServerOptions)

server.listen(devConfig.port, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:' + devConfig.port)
})
