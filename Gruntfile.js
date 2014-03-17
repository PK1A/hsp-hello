module.exports = function(grunt) {

  // Automatically load all the grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    'hsp-compiler': {
      all: {
        src: ['**/*.hsp'],
        dest: 'dist',
        ext: '.hsp.js',
        cwd: 'src/',
        expand: true
      }
    },
    copy: {
      html: {
        files: [
          {expand: true, cwd: 'src/', src: ['**/*.html'], dest: 'dist'}
        ]
      }
    },
    watch: {
      hsp: {
        files: ['src/**/*.hsp'],
        tasks: ['hsp-compiler']
      },
      html: {
        files: ['src/**/*.html'],
        tasks: ['copy']
      }
    },
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8000,
          base: 'dist',
          open: true
        }
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['hsp-compiler', 'copy']);
  grunt.registerTask('play', ['default', 'connect:server', 'watch']);
};