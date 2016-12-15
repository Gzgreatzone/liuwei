var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browsersync = require('browser-sync'),
    changed = require('gulp-changed'),
    del = require('del');
// var fileinclude = require('gulp-file-include');



var config = {
    autoprefixer: {
        browsers: [
            'last 2 versions',
            'safari 5',
            'opera 12.1',
            'ie 6-10'
        ],
        cascade: true
    }
};


gulp.task('js', function() {
    gulp.src(['src/js/*.*'])
        .pipe(changed('dist/js'))
        .pipe(plumber())
        .pipe(gulp.dest('dist/js'));
});


gulp.task('delete', function() {
    del('dist/css/*.map');
});

gulp.task('sass', function() {
    gulp.src(['src/sass/*.scss'])
        .pipe(changed('dist/css'))
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('sass2', function() {
    gulp.src(['src/sass/*.scss'])
        .pipe(changed('dist/css'))
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(gulp.dest('dist/css'));
});

/*gulp.task('fileinclude', function() {
    gulp.src('**.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('dist'));
});*/



gulp.task('watch', function() {
    gulp.watch(['src/sass/**/*.*', 'sass/*.*'], ['sass']);
    gulp.watch(['src/js/**/*.*'], ['js']);
});

gulp.task('default', function() {
    gulp.start(['sass', 'watch']);
});

gulp.task('publish', function() {
    gulp.start(['sass2', 'delete']);
});