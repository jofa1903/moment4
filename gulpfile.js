const { src, dest, watch, series, parallel } = require("gulp");
const concat = require('gulp-concat');
const cssConcat = require('gulp-concat-css');

//sökvägar
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js"
}

//kopiera html-filer
function copyHTML(){
    return src(files.htmlPath)
    .pipe(dest('pub')
    );
}

// //kopiera css-filer
// function copyCss(){
//     return src(files.cssPath)
//     .pipe(dest('pub')
//     );
// }

// concatination
 
function jsTask(){
    return src(files.jsPath)
    .pipe(concat('main.js'))
    .pipe(dest("pub/js"));
}

// CSS-concatination
 
function cssTask(){
    return src(files.cssPath)
    .pipe(cssConcat('bundle.css'))
    .pipe(dest("pub/css"));
}


// Watcher
function watchTask(){
    watch([files.htmlPath, files.jsPath, files.cssPath]);
    parallel(copyHTML, /*copyCss,*/ jsTask, cssTask);
}

// Default task
exports.default = series(
    parallel(copyHTML, /*copyCss,*/ jsTask, cssTask),
    watchTask
);


