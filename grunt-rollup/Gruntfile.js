/* globals module, require*/
const babel = require('rollup-plugin-babel');

module.exports = function Gruntfile(grunt) {
  grunt.initConfig({
    rollup: {
      options: {
        plugins: function () {
          return [
            babel({
              exclude: './node_modules/**',
              presets: ['es2015-rollup'],
            }),
          ];
        },
      },
      main: {
        dest: 'build/main.js',
        src: 'src/main.js', // Only one source file is permitted
      },
    },
  });

  grunt.loadNpmTasks('grunt-rollup');
};
