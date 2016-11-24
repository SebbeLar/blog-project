/* eslint-disable */
const autoprefixer = require('autoprefixer');

module.exports = {

    entry: './src/index.js',

    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
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
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
	    {
                test: /(\.css|\.scss)$/,
                loader: 'style-loader!css-loader?modules=true&localIdentName=[path][name]---[local]---[hash:base64:5]&sourceMap!postcss!sass?sourceMap'
            }
        ]
    },
    eslint: {
        configFile: './.eslintrc',
        failOnWarning: false,
        failOnError: true
    },
    postcss: () => [autoprefixer]
};
