// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var getEntrys = function (startPath) {
    var fs = require('fs');
    var join = require('path').join;
    var result = [], arr = [];

    function finder(path) {
        let files = fs.readdirSync(path);
        files.forEach((val, index) => {
            let fPath = join(path, val);
            let stats = fs.statSync(fPath);
            if (stats.isDirectory()) finder(fPath);
            if (stats.isFile()) result.push(fPath);
        });
        result.forEach(function (item) {
            var fileName = /([^\\]*)\.js/g.exec(item + "");
            if (fileName) {
                arr.push(fileName[1]);
            }
        });
        return arr;
    }

    return finder(startPath);
};
var _build = {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../'),
    assetsSubDirectory: 'dist',
    assetsPublicPath: '../',
    productionSourceMap: false,
    // Gzip off by default as many popular ccc hosts such as
    // Surge or Netlify already gzip all ccc assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
}
var fileNames = getEntrys("./src/entry");
fileNames.forEach(function (item) {
    _build[item] = path.resolve(__dirname, '../dist/' + item + '.html')
})
module.exports = {
    build: _build,
    dev: {
        env: require('./dev.env'),
        port: 7006,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        productionSourceMap: true,
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}
