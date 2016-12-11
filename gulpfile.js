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
		stripPrefix: '.',
		runtimeCaching: [{
		  urlPattern: /^https:\/\/spreadsheets\.google\.com\/feeds\/list\/1FHeOQKhKx0ywdUHv-tp1cL1Y__0QIIINX00PCERvPtY\/od6\/public\/basic\\?alt=json/,
		  handler: 'networkFirst',
		  options: {
		    cache: {
		      name: 'majors-v1'
		    }
		  }
		}]
	};
	return swPrecache.write('sw.js', swOptions);
});