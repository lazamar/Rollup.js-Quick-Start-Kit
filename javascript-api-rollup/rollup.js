/* globals require */

var rollup = require('rollup');
var babel = require('rollup-plugin-babel');
var fs = require('fs');

const config = {
  entry: './src/main.js', // Entry file
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['es2015-rollup'],
    }),
  ],
};

rollup.rollup(config)
.then(function (bundle) {

  // Generate bundle + sourcemap
  var result = bundle.generate({
    // output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
    format: 'es6',
  });

  fs.writeFileSync('bundle.js', result.code);

  bundle.write({
    format: 'es6',
    dest: 'build/main.js', // Exit file
  });
});
