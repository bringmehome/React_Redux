var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        './redux/index'
    ],
    output: {
        path: path.join(__dirname, './js/'),
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    plugins: [
        //    new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }, {
            test: /\.css?$/,
            loaders: ['style', 'raw']
        }]
    }
};
