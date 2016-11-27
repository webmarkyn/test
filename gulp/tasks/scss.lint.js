'use strict';

module.exports = function() {
    $.gulp.task('scss:lint', function() {
        return $.gulp.src('./source/style/**/*.s+(a|c)ss')
            .pipe($.gp.sassLint())
            .pipe($.gp.sassLint.format())
            .pipe($.gp.sassLint.failOnError())
    })
};
