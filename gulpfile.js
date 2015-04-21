// install npm install --save-dev gulp gulp-coffee gulp-concat gulp-sourcemaps gulp-util

var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

var paths = {
  scripts: {
    coffee: ["www/js/**/*.coffee"],
    js: [
      'www/vendors/js/underscore.min.js',
      'www/vendors/js/phaser.js',
      "www/build/js/config.js",
      "www/build/js/controllers/**/*.js",
      "www/build/js/prefabs/path_point_manager.js",
      "www/build/js/prefabs/bullet.js",
      "www/build/js/prefabs/weapon.js",
      "www/build/js/prefabs/army.js",
      "www/build/js/prefabs/soldier.js",
      "www/build/js/prefabs/soldiers.js",
      "www/build/js/scenes/main.js",
      "www/build/js/game.js"
    ]
  }
};

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('process-coffee', function() {
  return gulp.src(paths.scripts.coffee)
    .pipe(coffee({ bare: true })).on('error', gutil.log)
    .pipe(gulp.dest('www/build/js'));
});

gulp.task('scripts', ['process-coffee'], function() {
  return gulp.src(paths.scripts.js)
    .pipe(sourcemaps.init())
    .pipe(concat('index.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('www/js'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts.coffee, ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);