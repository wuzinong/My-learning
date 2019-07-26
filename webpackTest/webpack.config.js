const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcPath = subdir => path.resolve(__dirname, './ClientApp/', subdir);

module.exports = {
    entry:{
        polyfills:'./basic/polyfills.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx|ts|tsx)?$/,
                loaders: [
                    'ts-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        //如果你遇到了至少一处用到 _ 变量的模块实例，那请你将 lodash package 引入进来，并将其提供给需要用到它的模块。
        //https://webpack.docschina.org/guides/shimming/
        new webpack.ProvidePlugin({
            _:'lodash'
        }),
        new HtmlWebpackPlugin({
            template:'./index.html',
            inject:'body'
        })
    ]
}