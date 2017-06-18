var gulpif = require('gulp-if');
var tmtsprite = require('gulp-tmtsprite');
var gulp = require("gulp");
var clean = require('gulp-clean');
var webpack = require('webpack');

// https://github.com/shelljs/shelljs
require('./build/check-versions')()
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var config = require('./config/index')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./build/webpack.prod.conf')

console.log(
    '  Tip:\n' +
    '  Built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

gulp.task("build", function (callback) {
    webpack(webpackConfig, function (err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n')
        callback();
    })
});

gulp.task("move", ["build"], function () {
    return gulp.src('./img/*').pipe(gulp.dest('./dist/img/'));
});
gulp.task("clean", ["move"], function () {
    return gulp.src('./img').pipe(clean());
});
gulp.task("sprite", ["clean"], function () {
    return gulp.src('./dist/css/*.css')
        .pipe(tmtsprite({slicePath: '../img'}))
        .pipe(gulpif('*.png', gulp.dest('./dist/sprite/'), gulp.dest('./dist/css/')));
});
gulp.task('default', ["sprite"], function () {
    return gulp.src('./dist/img').pipe(clean());
});
