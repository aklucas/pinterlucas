var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
reload = browserSync.reload;


// Static server
gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });

    gulp.watch('public/**.**').on('change', reload);
});