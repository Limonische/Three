// 3D Models module

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(obj|mtl|fbx|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'models/',
                            publicPath: '../models',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './src/models',
                to: './models',
            },
        ]),
    ],
};
