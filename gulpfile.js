/**
 * Gulp
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');

// 压缩 js 文件
gulp.task('script', function() {
    gulp.src('./public/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'))
});

// 压缩 css 文件
gulp.task('minicss', () => {
  return gulp.src('./public/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/css'));
});


// 压缩html
gulp.task('html', function() {
  return gulp.src('./public/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true,removeComments: true}))
    .pipe(gulp.dest('./public'));
});

//压缩图片
gulp.task('img', function () {
    gulp.src(['./public/content/images/**/*.*'])
        .pipe(imagemin())
        .pipe(gulp.dest('./public/content/images'))
});


gulp.task('default', ['script','minicss','html']);
