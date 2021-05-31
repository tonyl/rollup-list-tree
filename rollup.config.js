import { terser } from "rollup-plugin-terser";
import scss from 'rollup-plugin-scss'
import pkg from './package.json';

export default {
  input: 'src/modules/index.js',
  plugins: [
    terser(),
    scss({
      output: 'dist/list-tree.min.css',
      outputStyle: "compressed"
    }),
  ],
  output: [
    {
      name: 'list-tree',
      file: pkg.browser,
      format: 'umd',
    },
    {
      file: pkg.module,
      format: 'es'
    },
  ],
};