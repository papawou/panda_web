const path = require('path');

module.exports = {
    mode: 'production',
    entry: [
        path.join(__dirname, '/frontend/src/index.jsx')
    ],
    output: {
        path: path.join(__dirname, '/public/build'),
        filename: "[name].games_slider.js",
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
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
            }
        ]
    }
};
