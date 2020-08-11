import browsersync from 'rollup-plugin-browsersync';
import html from 'rollup-plugin-generate-html-template';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    browsersync({
      server: 'dist'
    }),
    html({
      template: 'src/index.html',
      target: 'dist/index.html'
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};