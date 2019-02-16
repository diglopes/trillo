let gulp = require("gulp");
let autoprefixer = require("autoprefixer");
let soucemaps = require("gulp-sourcemaps");
let postcss = require("gulp-postcss");
let cleanCss = require("gulp-clean-css");
let imagemin = require("gulp-imagemin");

gulp.task("style", () => {
  gulp
    .src("./css/style.css")
    .pipe(soucemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCss())
    .pipe(soucemaps.write("."))
    .pipe(gulp.dest("build/css"));
});

gulp.task("imagemin", () => {
  gulp
    .src("img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("build/img"));
});
