import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';


const cssExportMap = {};


/**
 * Exports a default object configuration for Rollup
 * and mirrors the React/Rollup starter kit:
 *     https://github.com/yamafaktory/babel-react-rollup-starter
 */
export default {
    /**
     * React like the DOM is a tree so all
     * we need to do is pull in the root.
     */
    entry: 'src/Entrypoint.js',
    /**
     * Where to dump the JavaScript blob
     */
    dest: 'dist/bundle.js',
    /**
     * iife stands for Immediately Invoked Function Expression
     * which is what we want in the browser.  The 'dest' bundle
     * is what is run from the index.html in the final script tag.
     */
    format: 'iife',

    /**
     * Helpful for debugging
     */
    sourceMap: true,

    /**
     * Meat and potatoes for Rollup
     */
    plugins: [
        /**
         * Babel is the transpiler
         */
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [ [ 'es2015', { modules: false } ], 'stage-0', 'react' ],
            plugins: [ 'external-helpers' ]
        }),

        /**
         * CSS modules
         */
        postcss({
            plugins: [
                postcssModules({
                    getJSON (id, exportTokens) {
                        cssExportMap[id] = exportTokens;
                    }
                })
            ],
            getExport (id) {
                return cssExportMap[id];
            },
            extensions: ['.css', '.scss']
        }),

        /**
         * CJS stands for commonjs and the plugin 
         * converts CommonJS modules to ES6, so they 
         * can be included in a Rollup bundle.
         */
        cjs({
            /**
             * Including individual modules would might 
             * the final bundle a tad smaller but the manual
             * updating isn't worth the effort.
             */
            include: 'node_modules/**'
        }),

        /**
         * Helper for global objects (i.e. like process, tick etc.)
         * that aren't present in the browser but exist
         * in the node world.
         */
        globals(),

        /**
         * Flag for development
         */
        replace({ 
            'process.env.NODE_ENV': JSON.stringify('development') }
        ),

        /**
         * Locate modules using the Node resolution algorithm, 
         * for using third party modules in node_modules
         */
        resolve({
            /**
             * Use "main" field or index.js, even if it's not an ES6 module
             * (needs to be converted from CommonJS to ES6 
             * – see https://github.com/rollup/rollup-plugin-commonjs
             */
            main: true,

            /**
             * Some package.json files have a `browser` field which 
             * specifies alternative files to load for people bundling 
             * for the browser (which is us).
             */
            browser: true,
        })
    ]
};