import gulp from 'gulp';
import babel from 'gulp-babel';
import debug from 'gulp-debug';
import del from 'del';

gulp.task('clean', () => del('lib'));

gulp.task('build', ['clean'], () => {
  return gulp.src('src/**/*.js')
    .pipe(debug({ title: 'js' }))
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});