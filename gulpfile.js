var gulp = require('gulp')
// var uglify = require('gulp-uglify')
var sass = require('gulp-ruby-sass')

gulp.task('default', ['scripts', 'styles', 'watch'])

gulp.task('styles', function () {
  sass('stylesheets/main.sass')
  .on('error', sass.logError)
  .pipe(gulp.dest('public/'))
})

// scripts task
// uglifies
gulp.task('scripts', function () {
  // gulp.src('public/*.js')
  // .pipe(uglify())
  // .pipe(gulp.dest('minjs'))
  console.log('hello')
})

gulp.task('watch', function () {
  gulp.watch('stylesheets/main.sass', ['styles'])
})
