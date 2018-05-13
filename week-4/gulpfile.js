const gulp = require('gulp');
const babel = require('gulp-babel');

// gulp.task('default',['praise'],()=>{
//   //先做praise，然后做default
//   gulp.watch(['src/**/*.es6','!src/public/*/*.es6','!src/test/*.es6','!src/test/*.js'],['praise'])
// });

gulp.task('default', () =>
    gulp.src(['src/**/*.es6','!src/public/*/*.es6','!src/test/*.es6','!src/test/*.js'])
        .pipe(babel({
          presets: ['env']
        }))
        .pipe(gulp.dest('./build'))
);