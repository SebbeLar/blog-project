module.exports = {
    entry: {
        main: './index.js'
    },
    output: {
        filename: './dist/[name].js'
    },
    devtool: 'source-map',
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exlude: /node_modules/,
                loader: 'eslint'
            }
        ]
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: [ 'react', 'es2015' ]
                }
            }
        ]
    }
}
