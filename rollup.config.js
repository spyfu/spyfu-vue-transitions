import buble from 'rollup-plugin-buble';
import eslint from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify';

//
// config
//
const pkg = require('./package.json');
const external = Object.keys(pkg.peerDependencies);
const production = process.env.NODE_ENV === 'production';

//
// rollup
//
export default {
    input: 'src/index.js',
    output: [
        {
            file: pkg.main,
            format: 'umd',
            name: 'spyfuVueTransitions',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true,
        },
    ],
    plugins: [
        buble(),
        eslint(),
        production && uglify({}),
    ],
};