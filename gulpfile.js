var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
  
});


gulp.task('js', function () {
  gulp.src(['src/**/module.js', 'src/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('.'))

});

gulp.task('scripts', function () {

	return gulp.src('src/**/*.js')
	    .pipe(concat('app.js'))
	    .pipe(gulp.dest('dist'));
});