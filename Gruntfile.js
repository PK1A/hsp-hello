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
      all: {
        files: ['src/**'],
        tasks: ['default']
      }
    },
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8000,
          base: 'dist',
          keepalive: true,
          open: true
        }
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['hsp-compiler', 'copy']);
};