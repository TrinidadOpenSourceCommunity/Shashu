module.exports = function(grunt) {

  grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
//     jshint: {
//       files: ['gruntfile.js', 'app/js/*.js', 'test/**/*.js'],
//       options: {
//         // options here to override JSHint defaults
//         globals: {
//           jQuery: true,
//           console: true,
//           module: true,
//           document: true
//         }
//       }
//     },
	karma: {
  		options: {
    		singleRun: true,
    		browsers: ['PhantomJS'],
    		reporters: 'dots'
  		},
  		e2e: {
  			configFile: 'config/karma-e2e.conf.js'
  		},
  		unit : {
    		configFile: 'config/karma.conf.js',
  		}
	},	
  	connect: {
    	server: {
      		options: {
        		port: 8000,
        		base: '.'
      		}
    	}
  	}
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('test', ['karma:unit', 'connect', 'karma:e2e']);
  grunt.registerTask('default', ['karma:unit', 'connect', 'karma:e2e']);

};