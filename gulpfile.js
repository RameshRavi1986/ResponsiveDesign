/** Gulp task runner for automating build
**/

var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var del=require('del');
var server=require('./config/server.js');
var sourcemaps=require('gulp-sourcemaps');
var rename=require('gulp-rename');
var sass=require('gulp-sass');
var gutil=require('gulp-util');
// Configure paths for different parts of the file
var paths={

	styles:'app/css/base.scss',
	scripts:'app/scripts/*.js',
	img:'app/images/*.png',
	build:'build',
	stylesbuildpath:'build/css',
	bower_components:['bower_components/**/*.js','bower_components/**/*min.js.map'],
};
// Clean the build folder before we start
gulp.task('clean',function(cb){
	del(['build'],cb);
});
gulp.task('html', function(){
	return gulp.src('app/index.html')
		.pipe(gulp.dest('build'));
});

// To copy the bower_components to build
gulp.task('bower_files',function(){
return gulp.src(paths.bower_components)
	.pipe(sourcemaps.init())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('build/bower_components'));
});
gulp.task('scripts',function(){
return gulp.src(paths.scripts)
	   .pipe(concat("app.min.js"))
       .pipe(gulp.dest("build/js"));

});

gulp.task('images',function(){
return gulp.src(paths.img)
       .pipe(gulp.dest('build/images'));

});
// css copied to build
gulp.task('styles',function(){
return gulp.src(paths.styles)
	   .pipe(sass().on('error', sass.logError))	
	   .pipe(concat("app.min.css"))
       .pipe(gulp.dest('build/css'));

});
// Auto update the build folder once you change the data
gulp.task('watch',function(){
	gulp.watch(paths.styles,['styles']);
	gulp.watch('app/index.html',['html']);
    gulp.watch(paths.scripts,['scripts']);
});
gulp.task('server',function(){

	server.startServer();
});
gulp.task('default',['clean'],function(){
	gulp.start('watch','html','styles','scripts','images','bower_files','server');
});