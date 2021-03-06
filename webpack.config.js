var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'eval',
    entry: [
        // 'webpack-dev-server/client?http://192.168.7.254:3000',
        'webpack-hot-middleware/client',
        './redux/index'
    ],
    output: {
        path: path.join(__dirname, '/js/'),
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.css?$/,
            loaders: ['style', 'raw'],
            include: __dirname
        }]
    }
}


// When inside Redux repo, prefer src to compiled version.
// You can safely delete these lines in your project.
var reduxSrc = path.join(__dirname, '..', '..', 'src')
var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
var fs = require('fs')
if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
    // Resolve Redux to source
    module.exports.resolve = {
            alias: {
                'redux': reduxSrc
            }
        }
        // Compile Redux from source
    module.exports.module.loaders.push({
        test: /\.js$/,
        loaders: ['babel'],
        include: reduxSrc
    })
}
