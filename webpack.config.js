var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/App.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './index-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                },
            },
            { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        })
    ],
}