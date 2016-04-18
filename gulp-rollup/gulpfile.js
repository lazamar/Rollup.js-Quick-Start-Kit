var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('rollup-plugin-babel');
    rollup = require('gulp-rollup'),

gulp.task('rollup', function () {
  gulp.src([
    './src/main.js',
  ])
  .pipe(sourcemaps.init())
  .pipe(rollup({
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['es2015-rollup'],
      }),
    ],
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./build/'));
})

gulp.task('default', ['rollup']);
