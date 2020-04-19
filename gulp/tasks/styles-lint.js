const gulp = require("gulp");
const config = require("../config");
const scsslint = require('gulp-scss-lint');

gulp.task("styles-lint", () => {
  return gulp
    .src(config.styles.files_src)
    .pipe(scsslint())
});
