var gulp=require("gulp"),
	less=require("gulp-less");//编译less
var uglify=require("gulp-uglify"),//压缩js,先安装:npm install gulp-minify-css --save-dev
	minifycss=require("gulp-minify-css"),//压缩css
	rename=require("gulp-rename");//重命名
	
gulp.task("less",function(){//gulp添加一个任务，任务名叫less
	gulp.src("src/less/*.less").pipe(less()).pipe(gulp.dest("src/css/"));//gulp得到路径“less/*.less”所有的less文件；经过管道less（）方法编译，然后发布到css/文件夹下
});

gulp.task("watchLess",function(){//gulp添加一个任务，任务名叫watchLess
	gulp.watch("src/less/*.less",['less']);//监听路径“less/*.less”下所有的less文件，只要有变化就触发less任务
});

//发布
var pathSrc="src/";
var pathDest="dest/";
gulp.task('dest',function(){
	gulp.src([pathSrc+"**/*.*","!"+pathSrc+"less/*"]).pipe(gulp.dest(pathDest));//"!"+pathSrc+"less"排除这个less文件夹,老师的写法，错误的。正确写法"!"+pathSrc+"less/*"
});

////压缩js和css
gulp.task('minJs',function(){
	gulp.src(pathDest+"js/*.js").pipe(uglify()).pipe(rename(function(fileName){//文件名
		if(fileName.basename.indexOf('.min')==-1)
		{
			fileName.basename+='.min';//文件名最后加上“.min”
		}
	})).pipe(gulp.dest(pathDest+"js/"));
	
	gulp.src(pathDest+"css/*.css").pipe(minifycss()).pipe(rename(function(fileName){//文件名
		if(fileName.basename.indexOf('.min')==-1)
		{
			fileName.basename+='.min';//文件名最后加上“.min”
		}
	})).pipe(gulp.dest(pathDest+"css/"));
});
