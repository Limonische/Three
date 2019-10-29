// JavaScript module

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!(three)\/).*/,
                use: ['babel-loader', 'eslint-loader'],
            },
        ],
    },
};
