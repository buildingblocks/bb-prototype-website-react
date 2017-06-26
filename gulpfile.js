'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var wrench = require('wrench');
var del = require('del');
var environments = require('gulp-environments');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var shell = require('gulp-shell');
var rename = require('gulp-rename');
var config = require('./_gulp/config');
var connect = require('gulp-connect');

// build tasks
var build = function(callback) {
    runSequence(
        'clean:everything',
        'styles',
        'scripts-dev',
        'assets',
        callback
    );
};

var prodBuild = function(callback) {
    runSequence(
        'clean:everything',
        'styles',
        'minify-css',
        'scripts-prod',
        'assets',
        callback
    );
};

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

// DEV build
gulp.task('build', function(callback) {
    environments.current(environments.development);
    build(callback);
});

// PROD build
gulp.task('production', function(callback) {
    environments.current(environments.production);
    prodBuild(callback);
});

// build listings
gulp.task('buildListings', function(callback) {
    makeListings(callback);
});

gulp.task('commandline', shell.task([
	'node build',
]));

gulp.task('build_assets', ['buildListings'], function () {
    runSequence(
        'clean:everything',
        'commandline',
        'styles',
        'scripts-dev',
        'assets'
    );
});

gulp.task('build_assets_watch', ['buildListings'], function (callback) {
    runSequence(
        'clean:everything',
        'commandline',
        'styles',
        'scripts-dev',
        'assets',
        callback
    );
    livereload.listen();
    gulp.watch(config.paths.styles.src + '**/*.scss', ['styles', 'assets']);
    gulp.watch(config.paths.temp.src + '**/*', ['assets']);
    gulp.watch(config.paths.images.src + '**/*', ['assets']);
    gulp.watch(config.paths.scripts.src + '**/*.js', ['scripts-dev']);
    gulp.watch('_pages/**/*', ['commandline']);
    gulp.watch('_layouts/**/*', ['commandline']);
    gulp.watch('_master-pages/**/*', ['commandline']);
    gulp.watch('_data/**/*', ['commandline']);
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

gulp.task('serve', ['build_assets_watch'], function () {
    runSequence(
        'open_connection'
    );
});

gulp.task('default', ['build_assets_watch']);

gulp.task('dev', ['build_assets']);


