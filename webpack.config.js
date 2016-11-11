'use strict';
/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8888';

module.exports = {
    entry: [
    //  main: './index.js'
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devtool: 'process.env.WEBPACK_DEVTOOL' || 'cheap-module-source-map',
         // plugins: [
         // new webpack.HotModuleReplacementPlugin()
         // ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exlude: /node_modules/,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            },
            {
                test: /(\.css|\.scss)$/,
                loader: 'style-loader!css-loader?modules=true&localIdentName=[path][name]---[local]---[hash:base64:5]&sourceMap!postcss!sass?sourceMap'
            }
        ]
    },
    devServer: {
        contentBase: './public',
        noInfo: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    eslint: {
        configFile: './.eslintrc',
        failOnWarning: false,
        failOnError: true
    },
    postcss: () => [autoprefixer]
};
