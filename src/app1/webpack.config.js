const path = require('path');

module.exports = {
    entry: {
        main: './src/app1.js',
        store: './src/app1Store.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'amd',
        library: 'reactApp'
    },

    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader?cacheDirectory'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: '/app1/',
                        }
                    }
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ],
    },

    devtool: 'eval-source-map',
    // devtool: 'none',

    devServer: {
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },

};