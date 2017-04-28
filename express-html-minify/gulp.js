var gulp        	= require('gulp');
var htmlmin = require('gulp-htmlmin');


gulp.task('minifyHbs', function() {

  return gulp.src('dev/templates/**/*.hbs')
    .pipe(htmlmin({
		collapseWhitespace: true,
		removeComments: true,
        removeCommentsFromCDATA: true,
		removeComments: true,
        minifyJS: true,
        minifyCSS: true,
		ignoreCustomFragments: [/{{[\s\S]*?}}/]
		}))
    .pipe(gulp.dest('./'));
});