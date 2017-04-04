var gulp = require('gulp');
var connect = require('gulp-connect');

var cfg = require('../config');

//live reload server
gulp.task('connect', function() {
    connect.server({
        root: cfg.BUILD_DIR,
        livereload: true,
        fallback: 'dist/index.html',
        port: 8000
    });
});

var spawn = require('child_process').spawn;

gulp.task('server', function (callback) {
	console.log("1");
    spawn('node', ['api/index.js'], { stdio: 'inherit' });
});






