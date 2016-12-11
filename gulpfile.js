var gulp = require('gulp');
var sass = require('gulp-sass');
var swPrecache = require('sw-precache');

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

gulp.task('generate:sw', function() {
	var swOptions = {
		staticFileGlobs: [
		'./*.html',
		'./images/*{png,svg,gif,jpg}',
		'./javascripts/*.js',
		'./stylesheets/*.css'
		],
		stripPrefix: '.'
	};
	return swPrecache.write('sw.js', swOptions);
});