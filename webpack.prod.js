const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin (['dist']),
        new HtmlWebpackPlugin ({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
});