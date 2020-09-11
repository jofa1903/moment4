const { src, dest, watch, series, parallel } = require("gulp");
const jsConcat = require('gulp-concat');
const cssConcat = require('gulp-concat-css');
const browserSync = require('browser-sync');

//sökvägar
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js"
}

//kopiera html-filer
function htmlTask(){
    return src(files.htmlPath)
    .pipe(dest('pub')
    );
}

// concatination
function jsTask(){
    return src(files.jsPath)
    .pipe(jsConcat('main.js'))
    .pipe(dest("pub/js"));
}

// CSS-concatination
function cssTask(){
    return src(files.cssPath)
    .pipe(cssConcat('bundle.css'))
    .pipe(dest("pub/css"));
}

// BrowserSync
function reload(){
    browserSync.init({
        server: {
            baseDir: './pub/'
        }
    });
    watch(files.htmlPath, htmlTask).on('change', browserSync.reload);
}

// Watcher
function watchTask(){
    watch([files.htmlPath, files.jsPath, files.cssPath]);
    parallel(htmlTask, jsTask, cssTask);
}

// Default task
exports.default = series(
    parallel(htmlTask, jsTask, cssTask),
    reload,
    watchTask
);