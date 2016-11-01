'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app_bower_components: {
        files: {
          './app/min-safe/bower_components/angular/angular.js': ['./app/bower_components/angular/angular.js'],
          './app/min-safe/bower_components/angular-route/angular-route.js': ['./app/bower_components/angular-route/angular-route.js'],
          './app/min-safe/bower_components/angular-sanitize/angular-sanitize.js': ['./app/bower_components/angular-sanitize/angular-sanitize.js'],
          './app/min-safe/bower_components/videogular/videogular.js': ['./app/bower_components/videogular/videogular.js'],
          './app/min-safe/bower_components/videogular-controls/vg-controls.js': ['./app/bower_components/videogular-controls/vg-controls.js'],
          './app/min-safe/bower_components/videogular-buffering/vg-buffering.js': ['./app/bower_components/videogular-buffering/vg-buffering.js']
        }
      },
      app: {
        files: {
          './app/min-safe/app.module.js': ['./app/app.module.js'],
          './app/min-safe/cliff-talbott/cliff-talbott.module.js': ['./app/cliff-talbott/cliff-talbott.module.js'],
          './app/min-safe/cliff-talbott/cliff-talbott.component.js': ['./app/cliff-talbott/cliff-talbott.component.js']
        }
      }
    },
    concat: {
      bower_components: {
        options: {
          // Replace all 'use strict' statements in the code with a single one at the top
          banner: "'use strict';\n",
          process: function(src, filepath) {
            return '// Source: ' + filepath + '\n' +
              src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
          },
        },
        src: [
          './app/min-safe/bower_components/angular/angular.js', 
          './app/min-safe/bower_components/angular-route/angular-route.js',
          './app/min-safe/bower_components/angular-sanitize/angular-sanitize.js',
          './app/min-safe/bower_components/videogular/videogular.js',
          './app/min-safe/bower_components/videogular-controls/vg-controls.js',
          './app/min-safe/bower_components/videogular-buffering/vg-buffering.js'
        ],
        dest: './app/min/bower_components.min.js'
      },
      app: {
        options: {
          // Replace all 'use strict' statements in the code with a single one at the top
          banner: "'use strict';\n",
          process: function(src, filepath) {
            return '// Source: ' + filepath + '\n' +
              src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
          },
        },
        src: [
          './app/min-safe/app.module.js',
          './app/min-safe/cliff-talbott/cliff-talbott.module.js',
          './app/min-safe/cliff-talbott/cliff-talbott.component.js'
        ],
        dest: './app/min/app.min.js'
      }
    },
    jshint: {
      options: {
        node: true,
        globals: {
          'angular': false
        }
      },
      beforeconcat: [
        'Gruntfile.js',
        './app/app.module.js',
        './app/cliff-talbott/cliff-talbott.component.js',
        './app/cliff-talbott/cliff-talbott.module.js'
      ],
      afterconcat: ['./app/min/app.min.js']
    },    
    uglify: {
      bower_components: {
        src: './app/min/bower_components.min.js',
        dest: './app/min/bower_components.min.js'
      },
      app: {
        src: './app/min/app.min.js',
        dest: './app/min/app.min.js'
      }
    }
  });
  
  // Load the plugins to provide tasks
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['ngAnnotate', 'concat', 'jshint', 'uglify']);
};

