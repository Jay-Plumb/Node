module.exports = function(grunt) {

	grunt.initConfig({

		// browserify
		browserify: {
    js: {
        src: ['app.js'], //ideally src is templates/**/*.hbs rather than on a specific module
        dest: 'bundle.js'
    },
    options: {
        transform: ['hbsfy'],
        watch: true,
        keepAlive: true
    }
}

	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('default', ['browserify'])
};