const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        //app: './src/app.ts',
        app: './src/main.ts'        
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../../', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: 'file-loader'
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].bundle.js',
            minChunks(module, count){
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            }
        }),

        //remove error: 18359:15-36 Critical dependency: the request of a dependency is an expression
        //and remove error: 18371:15-102 Critical dependency: the request of a dependency is an expression
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve(__dirname, 'src'), // path to your src
            {}
        )        
    ]
};