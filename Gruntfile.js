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

	'user strict';

	/**
	* Dynamically load npm tasks.
	*/
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Initialize Grunt config object.
	grunt.intiConfig({
		// 
	});

	// Default (Dev) grunt task, call by typing "grunt" on command line.
	grunt.registerTask('default', []);

	// Production grunt task, call by typing "grunt dist" on command line.
	grunt.registerTask('dist', []);

};
