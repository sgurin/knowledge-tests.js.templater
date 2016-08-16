var gulp = require('gulp'),
    mochaPhantomJS = require('gulp-mocha-phantomjs');

gulp.task('test-stage-1', function () {
    return gulp
        .src('spec/stage-1/index.html')
        .pipe(mochaPhantomJS());
});