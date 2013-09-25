/**
 * Gruntfile for site forvia
 * @author Rezki Bangsawan
 * @url https://github.com/rbangsawan/forvia
 */

/**
 * Livereload and connect variables.
 */
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({
	port: LIVERELOAD_PORT
});
var mountFolder = function (connect, dir) {
	return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {

	'use strict';

	/**
	* Dynamically load npm tasks.
	*/
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Initialize Grunt config object.
	grunt.initConfig({

		// Save NPM config file, so it can be read later from this Grunt.
		pkg: grunt.file.readJSON('package.json'),

		// Configurable paths and other variables. 
		config: {
			tstamp: '<%= grunt.template.today("ddmmyyyyhhMMss") %>',
			src: 'src',
			app: 'app',
			css: [
				'<%= config.src %>/scss/main.scss'
			],
			js: [
				'<%= config.src %>/js/*.js'
			]
		},

		/**
		 * Project banner
		 * Dynamically appended to CSS/JS files
		 * Inherits text from package.json
		 */
		tag: {
			banner: '/*!\n' +
				' * <%= pkg.name %>\n' +
				' * <%= pkg.url %>\n' +
				' * @author <%= pkg.author %>\n' +
				' * @version <%= pkg.version %>\n' +
				' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
				' */\n'
		},

		/**
		 * Compile Sass/Scss
		 * @type	{Object}
		 * @url		"https://github.com/gruntjs/grunt-contrib-sass"
		 * @todo	"Better options maybe?"
		 */
		sass: {
			dev: {
				options: {
					style: 'expanded',
					compass: true,
					debugInfo: true,
					banner: '<%= tag.banner %>'
				},
				files: {
					'<%= config.app %>/css/main.min.css': '<%= config.css %>'
				}
			},
			dist: {
				options: {
					style: 'compressed',
					compass: true,
					banner: '<%= tag.banner %>'
				},
				files: {
					'<%= config.app %>/css/main.min.css': '<%= config.css %>'
				}
			}
		}
	});

	// Default (Dev) grunt task, call by typing "grunt" on command line.
	grunt.registerTask('default', [
		'sass:dev'
		// 'connect:livereload',
		// 'open',
		// 'watch'
	]);

	// Production grunt task, call by typing "grunt dist" on command line.
	grunt.registerTask('dist', []);

};
