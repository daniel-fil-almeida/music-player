var gulp = require('gulp');
var fs = require('fs-extra');

var cfg = require('../config');

/*Clean dist files */

gulp.task('clean', function(cb) {
    fs.removeSync(cfg.BUILD_DIR);
    return cb();
});
