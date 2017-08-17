'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var wrench = require('wrench');
var del = require('del');
var environments = require('gulp-environments');
var gutil = require('gulp-util'); // takes variables passed from command line
var livereload = require('gulp-livereload');
var shell = require('gulp-shell');
var rename = require('gulp-rename');
var config = require('./_gulp/config');
var connect = require('gulp-connect');
var cachebust = require('gulp-cache-bust');

var makeListings = function(callback) {
    runSequence(
        'listings',
        callback
    );
};

/**
 *  This will load all js files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./_gulp').filter(function(file) {
    return (/\.(js)$/i).test(file);
}).map(function(file) {
    require('./_gulp/' + file);
});

gulp.task('clean:everything', function() {
    return del('dist');
});

// build listings
gulp.task('buildListings', function(callback) {
    makeListings(callback);
});

// cachebust
gulp.task('cachebust', function() {
    gulp.src('dist/**/*.html')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('dist'));
});

// run commandline commands
gulp.task('commandline', shell.task([
	'node build',
]));


// build tasks
gulp.task('build', ['buildListings'], function () {
    runSequence(
        'clean:everything',
        'commandline',
        'styles',
        // 'scripts-dev',
        'scripts-prod',
        'assets',
        'cachebust'
    );
});

gulp.task('build_cached', ['buildListings'], function () {
    runSequence(
        'clean:everything',
        'commandline',
        'styles',
        // 'scripts-dev',
        'scripts-prod',
        'assets'
    );
});

gulp.task('production', ['buildListings'], function (callback) {
    runSequence(
        'clean:everything',
        'commandline',
        'styles',
        'minify-css',
        'scripts-prod',
        'assets',
        'cachebust',
        callback
    );
});

gulp.task('build_watch', ['buildListings'], function (callback) {
    runSequence(
        'clean:everything',
        'commandline',
        'styles',
        'scripts-dev',
        'assets',
        'cachebust',
        callback
    );
    livereload.listen();
    gulp.watch(config.paths.styles.src + '**/*.scss', ['styles', 'assets','cachebust']);
    gulp.watch(config.paths.temp.src + '**/*', ['assets','cachebust']);
    gulp.watch(config.paths.images.src + '**/*', ['assets','cachebust']);
    gulp.watch(config.paths.scripts.src + '**/*.js', ['scripts-dev','cachebust']);
    gulp.watch('_pages/**/*', ['commandline']);
    gulp.watch('_layouts/**/*', ['commandline']);
    gulp.watch('_master-pages/**/*', ['commandline']);
    gulp.watch('_data/**/*', ['commandline']);
    gulp.watch('_components/**/*', ['commandline']);
});

// SERVE TASK
gulp.task('open_connection', function(callback) {
    var open = require('open');
    var serverPort = Math.floor((Math.random() * 1000) + 3000);
    var localhost = 'http://localhost:' + serverPort;

    connect.server({
        host: 'localhost',
        port: serverPort,
        livereload: true,
        root: config.basePaths.dist
    });

    open(localhost, 'google chrome');
});


// tasks to run from command line
// build and watch files then serve site in chrome
gulp.task('serve', ['build_watch'], function () {
    runSequence(
        'open_connection'
    );
});

// build and watch files
gulp.task('default', ['build_watch']);

// just build
gulp.task('dev', ['build']);

// just build but without cache bust
gulp.task('dev-cache', ['build_cached']);


// Backend tasks
// deploy just runs the production build (minification tasks included in this) and then copies over to location specified in commandline
gulp.task('deploy', ['production'], function() {
    gulp.src(config.basePaths.dist + '**/*')
    .pipe(gulp.dest(gutil.env.dest));
});

// build-sln will run the prod build and then copy files & folders over to the specified backend directory
// local backend build
gulp.task('build-sln', ['production'], function() {
    gulp.src(config.paths.scripts.dist + '**/*')
    .pipe(gulp.dest(config.paths.sln.web + '/_scripts/'));

    gulp.src(config.paths.styles.dist + '**/*')
    .pipe(gulp.dest(config.paths.sln.web + '/_styles/'));

    gulp.src(config.paths.images.dist + '**/*')
    .pipe(gulp.dest(config.paths.sln.web + '/_images/'));
});

