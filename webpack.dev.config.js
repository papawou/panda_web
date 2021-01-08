const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/frontend/src/index.jsx'),
    ],
    output: {
        path: path.join(__dirname, '/public/build'),
        filename: '[name].games_slider.js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['.mjs', '.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [
                    path.join(__dirname, '/public/'),
                    path.join(__dirname, '/node_modules/')
                ],
                use: ['babel-loader']
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};