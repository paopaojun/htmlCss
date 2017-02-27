/**
 * Created by Administrator on 2017/2/26.
 */
'use strict';
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');
var htmlreplace = require('gulp-html-replace');
gulp.task('default', ["clean","html","css","js","images","json","common","concat"], function () {
    // 将你的默认的任务代码放在这
    console.log("gulp 完成了！");
});
//cssConcat
gulp.task('concat',["clean"], function() {
    return gulp.src(['./src/common/common.css','./src/css/main1_2_8_9.css'])
        .pipe(concat('common1_2_8_9.css'))
        .pipe(gulp.dest('./build/css'));
});
//common输出
gulp.task("common",["clean"], function () {
    gulp.src(["./src/common/*.css","./src/common/*.js"])
        .pipe(gulp.dest("./build/common"));
});
// html输出
gulp.task("html",["clean"], function () {
    gulp.src(["./src/html/*.**"])
        .pipe(htmlreplace({
            'css':{
                src:["../css/common1_2_8_9.css"],
                tpl:'<link rel="stylesheet" href="%s" type="text/css">'
            }
        }))
        .pipe(gulp.dest("./build/html"));
});
//css压缩输出
gulp.task("css",["clean"], function () {
    gulp.src(["./src/css/*.css","!./src/css/main1_2_8_9.css"])
        .pipe(cleanCSS({
            compatibility: '*',
            advanced: false
        }))
        .pipe(gulp.dest("./build/css"));
});
//js压缩输出
gulp.task("js",["clean"], function () {
    gulp.src(["./src/js/*.**"])
        .pipe(uglify({
            compress:{
                //移除console日志
                drop_console: true
            }}
        ))
        .pipe(gulp.dest("./build/js"));
});
//images输出
gulp.task("images",["clean"], function () {
    gulp.src(["./src/images/*.**"])
        .pipe(gulp.dest("./build/images"));
});
//json输出
gulp.task("json",["clean"], function () {
    gulp.src(["./src/json/*.**"])
        .pipe(gulp.dest("./build/json"));
});
//清空build文件夹
gulp.task('clean', function () {
    console.log("clean");
    return gulp.src(['./build'], {read: false})
        .pipe(clean({force: true}));
});