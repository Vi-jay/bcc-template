require('./check-versions')()
var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

 var app = express()
 var appData = require("../virtual_data/keywords.json");//导入json
 var keywords = appData;//创建三个模拟数据

 //创建路由api
 var apiRoutes = express.Router();
apiRoutes.get("/keywords", function (res, req) {
    req.json( keywords
    )
});
//
// apiRoutes.get("/monthOrderData", function (res, req) {
//     req.json({
//         data: monthOrderData
//     })
// });
//
// apiRoutes.get("/shopCallBack", function (res, req) {
//     req.json({
//         data: shopCallBack
//     })
// });
// apiRoutes.get("/shopStock", function (res, req) {
//     req.json({
//         data: shopStock
//     })
// });
// apiRoutes.get("/todayBuyType", function (res, req) {
//     req.json({
//         data: todayBuyType
//     })
// });
// apiRoutes.get("/todayOrderData", function (res, req) {
//     req.json({
//         data: todayOrderData
//     })
// });
 app.use("/JSON", apiRoutes);//当请求路径为/api时就会调用api路由对象

//路由对象会根据不同请求地址分会不同的数据 例：/api/goods就会返回goods中定义的json
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {
    }
})
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({action: 'reload'})
        cb()
    })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = {target: options}
    }
    app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
    console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }

    // when env is testing, don't need open it
    if (process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
})
