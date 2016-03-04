var wiredep = require('wiredep');

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		wiredep: {
			injectDeps: {
				src: [
					'index.html'
				]
			}
		},

		uglify: {
			myApp: {
				files: {
					'dist/scripts/app.min.js': ['scripts/**/*.js']
				}
			},
			myAppVendor: {
				files: {
					'dist/scripts/vendor.min.js': wiredep().js
				}
			}
		},

		jshint: {
			all: ['Gruntfile.js', 'scripts/**/*.js']
		},

		watch: {
			js: {
				files: ['Gruntfile.js', 'scripts/**/*.js'],
				tasks: ['jshint']
			},
			bower: {
				files: ['bower.json'],
				tasks: ['wiredep']
			}
		}
	});

	grunt.registerTask('build', [
		'jshint',
		'uglify',
		'wiredep'
	]);

	grunt.registerTask('default', ['build']);
};