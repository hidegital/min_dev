import gulp        from 'gulp';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import paths       from '../config';

gulp.task('jade-reload', ['jade'], () => {
  browserSync.reload();
});

gulp.task('stylus-reload', ['stylus'], () => {
  browserSync.reload();
});

gulp.task('js-reload', ['browserify'], () => {
  browserSync.reload();
});

gulp.task('watch', () => {
  runSequence(['jade','stylus'], 'server');
  gulp.watch(paths.jade_watch, ['jade-reload']);
  gulp.watch(paths.stylus_watch, ['stylus-reload']);
  gulp.watch(paths.js,         ['js-reload']);
});

