var gulp 		= require('gulp'),
	rename 		= require('gulp-rename'),
	concat 		= require('gulp-concat'),
	uglify 		= require('gulp-uglify');

//
// Concatenate all source files
//
gulp.task('dist', function() {

	return gulp
		.src([
			'js/profile-objects.js'
		])
		.pipe(concat('jbb-three.js'))
		.pipe(gulp.dest('dist'))
		.pipe(uglify())
		.pipe(rename('jbb-three.min.js'))
		.pipe(gulp.dest('dist'));

});

// Run tasks 
gulp.task('default', ['dist']);
