var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'))
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('src/**/*.scss',['styles']);
    gulp.watch('src/**/*.html',['html']);
});

gulp.task('html', function(){
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('default',['watch']);

