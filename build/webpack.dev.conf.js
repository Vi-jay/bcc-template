var config = require('../config/index')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrors = require('friendly-errors-webpack-plugin')


// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})
var plugins = [
    new webpack.DefinePlugin({
        'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new FriendlyErrors()
];
var fileNames = utils.getEntrys("./src/entry"),viewPtah="./src/html/";
fileNames.forEach(function (item) {
    plugins.push(
        new HtmlWebpackPlugin({
            filename: viewPtah+item+'.html',
            template: viewPtah+item+'.html',
            inject: true,//是否开启注入
            chunks: [item]})
    )
})
module.exports = merge(baseWebpackConfig, {
    module: {
        loaders: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
    },
    // eval-source-map is faster for development
    devtool: '#eval-source-map',
    plugins: plugins
})
