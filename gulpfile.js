'use strict';

var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


var autoprefixerOptions = {
    browsers: [
        'last 2 versions',
        '> 5%',
        'Chrome 41',
        'Firefox 45',
        'Edge 12',
        'Safari 9',
        'Safari 10',
        'iOS 9',
        'iOS 10',
    ],
};

var CSSOUTPUT = 'main.css';

gulp.task('sass', function() {
    return gulp
        .src('./assets/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);
