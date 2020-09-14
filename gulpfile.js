const { src, dest, watch, series, parallel } = require("gulp");
const jsConcat = require('gulp-concat');
const cssConcat = require('gulp-concat-css');
const browserSync = require('browser-sync');
const uglify = require("gulp-uglify-es").default;
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const imagemin = require("gulp-imagemin");


//pathways
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js",
    imgPath: "src/pre-img/*"
}

//copy HTML-files to pub folder
function htmlTask(){
    return src(files.htmlPath)
    .pipe(dest('pub')
    );
}

// JS-concatination
function jsTask(){
    return src(files.jsPath)
    .pipe(jsConcat('main.js'))
    .pipe(uglify())
    .pipe(dest("pub/js"));

}

// image compression
function imageCompressionTask(){
    return src(files.imgPath)
    .pipe(imagemin({ progressive: true }))
    .pipe(dest('pub/img'));
};

// CSS-concatination
function cssTask(){
    return src(files.cssPath)
    .pipe(cssConcat('bundle.css'))
    .pipe(postcss([autoprefixer(), cssnano]))
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
    watch(files.cssPath, cssTask).on('change', browserSync.reload);
    watch(files.jsPath, jsTask).on('change', browserSync.reload);
}


// Default task
exports.default = series(
    parallel(htmlTask, jsTask, cssTask, imageCompressionTask),
    reload
);