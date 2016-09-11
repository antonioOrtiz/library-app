var gulp = require('gulp'),
    jshint = require('gulp-jshint');

    var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function(){
  gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {
        verbose: true
        }));
})