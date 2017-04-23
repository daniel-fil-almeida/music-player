var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var minify = require('gulp-minify');
var cfg = require('../config');

gulp.task('deps:js', function(){
    return gulp.src(cfg.BUILD_DEPS.JS)
    	.pipe(debug({title: 'example src:'}))
        .pipe(concat('dependencies.js'))
        .pipe(gulp.dest(cfg.BUILD_DIR + '/vendor'));
});

gulp.task('deps:fonts', function(){
    return gulp.src(cfg.BUILD_DEPS.FONTS)
        .pipe(gulp.dest(cfg.BUILD_DIR + '/fonts'));
});
