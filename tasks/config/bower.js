// Grunt task to add bower components to the project
module.exports = function(grunt) {
  grunt.config.set('bower', {
    dev: {
      dest: '.tmp/public/bower_components',
      ignorePackages: ['font-awesome'],
      options: {
        expand: true
      }
    }
  });
  console.log('running grunt-bower');

  grunt.loadNpmTasks('grunt-bower');
};
