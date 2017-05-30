var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    entry: {
        "bundle": "./src/app.js"
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname,'dist'),  // build output file
        filename: "[name].min.js",
        library: 'calc',  // the name will be used to access module inside this file
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [

            {
                test:/\.js$/,
                use: [
                    {
                        loader: 'babel-loader',  //transpile to work in older browser
                        options: {
                            presets: ['es2015']
                        }
                    }],
                exclude: /(\/node_modules\/|test\.js|\.spec\.js$)/
            },
            {
                test: /\.js$/,
                exclude: /(\/node_modules\/|\/tests\/)/,
                loader: "eslint-loader",  // verify using eslint
                options: {}
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html" // include html to final dist
        }),
        new CleanWebpackPlugin(['dist','coverage']),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new UnminifiedWebpackPlugin()
    ],
    resolve: {
        extensions: [".js"],
        modules: [
            __dirname,
            path.resolve(__dirname, "node_modules")
        ]
    }
}