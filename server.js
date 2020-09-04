import express from 'express'
import path from 'path'
require("util").inspect.defaultOptions.colors = true
require('colors')

const app = express()

const environment = process.env.NODE_ENV
const staticPath = path.join(__dirname, '/public')
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//DEVELOPMENT
if (environment === 'development') {
    console.log('o==3 DEVELOPMENT RUN o==3')

    let enable_webpack = true
    //WEBPACK
    if (enable_webpack) {
        const webpack = require('webpack');
        const webpackDevMiddleware = require('webpack-dev-middleware')

        const config = require('./webpack.dev.config.js')
        const compiler = webpack(config);

        app.use(webpackDevMiddleware(compiler, {
            noInfo: true,
            publicPath: config.output.publicPath,
            hot: true
        }))
        app.use(require("webpack-hot-middleware")(compiler))
    }
}
else {
    console.log('!!! PRODUCTION RUN !!!')
}

//ROUTES
app.use(express.static(staticPath))
//
app.use('*', (req, res) => {
    console.log('* CALLED - ' + req.originalUrl)
    res.sendFile(path.join(staticPath, 'index.html'))
})

const server = app.listen(port, /*host,*/ function () {
    console.log('Server listening on: ' /*+ host*/ + ':' + port)
})