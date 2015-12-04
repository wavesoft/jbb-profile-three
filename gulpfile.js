var gulp 		= require('gulp'),
	uglify 		= require('gulp-uglify');

//
// Concatenate all source files
//
gulp.task('dist', function() {
	gulp.src('js/profile-objects.js')
		.pipe(uglify("jbb-three.js"))
		.pipe(gulp.dest('dist'));
});

// Run tasks 
gulp.task('default', ['dist']);
