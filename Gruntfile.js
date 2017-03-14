module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cfg: grunt.file.readJSON('config.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: '<%= cfg.js %>',
        dest: 'assets/js/build.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'assets/js/build.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'assets/css/main.css': 'src/styles/main.scss'
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1,
        sourceMap: false
      },
      target: {
        files: {
          'assets/css/dependencies.css': '<%= cfg.css %>'
        }
      }
    },
    watch: {
      styles: {
        files: ['src/styles/**/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['build:js']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build:js', ['concat', 'uglify']);
  grunt.registerTask('build:css', ['sass', 'cssmin']);
  grunt.registerTask('build', ['build:css', 'build:js']);
};
