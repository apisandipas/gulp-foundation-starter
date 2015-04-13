var gulp = require('gulp');
var s3   = require("gulp-s3");
var config    = require('../config').deploy;


gulp.task('deploy', function(){
    gulp.src(config.src)
        .pipe(s3(config.s3));
})
