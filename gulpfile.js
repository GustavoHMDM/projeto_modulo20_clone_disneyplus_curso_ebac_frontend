const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ style: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;

