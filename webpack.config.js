const _ = require('lodash');
const fs = require('fs');
const resolve = require('path').resolve;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const env = process.env.NODE_ENV;

const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const root = `${__dirname}/`;
const paths = {
    context: resolve(root, 'src') + '/',
    scripts: resolve(root, 'dist') + '/',
};

const config = {
    optimization: {
        splitChunks: {
            name: true,
            minChunks: 1,
        }
    },
    context: paths.context,
    entry: {
        /**
         * Contain all the vendors entries
         *
         * Vendors library (React, Lodash, ...)
         * Polyfills
         */
        // vendor: [
        // Polyfills
        // 'core-js/es6/object',
        // 'core-js/es6/promise',
        // 'whatwg-fetch',
        // ],
        /**
         * Each of the following entries represent the single entrypoints
         * for a given page type
         */
        "qr-scanner": [
            paths.context + 'qr-scanner.js'
        ],
        "scanner.worker": [
            paths.context + 'scanner.worker.js'
        ],
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/env',
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-transform-runtime'
                    ]
                },
            },

            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }

        ],
    },
    output: {
        filename: '[name].js',
        path: paths.scripts,
        publicPath: "/"
    },
    performance: {
        hints: env === 'production' ? 'warning' : false,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env),
            },
        }),
    ],
    resolve: {
        alias: {},
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [
            'node_modules',
            './src',
        ],
    },
    target: 'web',
};

if (env === 'production') {
    config.optimization.minimizer = [
        // we specify a custom UglifyJsPlugin here to get source maps in production
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
                compress: {
                    negate_iife: true,
                    unused: true,
                    dead_code: true,
                    drop_console: true,
                },
                warnings: true,
                output: {comments: false},
            },
            sourceMap: true
        })
    ];
}
module.exports = config;