import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build:chi', done => runSequence(
  'build:chi:styles',
  'build:chi:assets',
  'build:chi:sprite',
  'build:chi:scripts',
  'build:chi:scriptsES6',
  'build:chi:scriptsAMD',
  'build:test:fixtures',
  done
));