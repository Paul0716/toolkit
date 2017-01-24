const gulp = require("gulp");


const Config = require('./config.js');


gulp.task('default', () => {
	for(var key in Config){
		console.log(Config[key]);
	}
})

