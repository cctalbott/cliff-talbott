module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files {
          './app/min-safe/app.module.js': ['./app/app.module.js'],
          './app/min-safe/cliff-talbott/cliff-talbott.component.js': ['./app/cliff-talbott/cliff-talbott.component.js'],
          './app/min-safe/cliff-talbott/cliff-talbott.module.js': ['./app/cliff-talbott/cliff-talbott.module.js']
        }
      }
    },
    concat: {
      js: {
        src: ['./app/min-safe/app.module.js', './app/min-safe/cliff-talbott/*.js'],
        dest: './app/min/app.min.js'
      }
    },
    uglify: {
      js: {
        src: ['./app/min/app.min.js'],
        dest: ['./app.min/app.min.js']
      }
    }
  });

  // Load the plugins to provide tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-annotate');

  // Default task(s).
  grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify']);

};