var path = require('path')
var config = require('../config/index')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')



var fileNames = utils.getEntrys("./src/entry");
//entryPath
var entry={},entryPath="./src/entry/";
fileNames.forEach(function (item) {
    entry[item]=entryPath+item+".js"
});

var env = process.env.NODE_ENV
// check env & config/index.js to decide whether to enable CSS source maps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
    // entry: {
    //     app: './src/entry/main.js',
    //     other: './src/entry/other.js',
    // },
    entry:entry,
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.json'],
        fallback: [path.join(__dirname, '../node_modules')],
        /*别名*/
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': path.resolve(__dirname, '../src'),
            'ROUTES': path.resolve(__dirname, '../src/routes'),
            'ASSETS': path.resolve(__dirname, '../src/assets'),
            'COMPONENTS': path.resolve(__dirname, '../src/components'),
            'MIXINS': path.resolve(__dirname, '../src/mixins'),
            'UTILS': path.resolve(__dirname, '../src/utils'),
            'VUEX': path.resolve(__dirname, '../src/vuex'),
            'VIEW': path.resolve(__dirname, '../src/view')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: [
                    path.join(projectRoot, 'src')
                ],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 100,
                    name: 'img/[name].[ext]'
                }
            },
            {
                test: /\.css$/,
                loader: 'url',
                query: {
                    limit: 1000,
                    name: utils.assetsPath('css/[name].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 100,
                    name: utils.assetsPath('fonts/[name].[ext]')
                }
            }
        ]
    },
    vue: {
        loaders: utils.cssLoaders({sourceMap: useCssSourceMap}),
        postcss: [
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ]
    }
}
