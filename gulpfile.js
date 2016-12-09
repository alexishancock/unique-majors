var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function () {
  return gulp.src('stylesheets/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'));
});

gulp.task('sass:watch', function () {
  gulp.watch('stylesheets/*.scss', ['sass']);
});