const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        './home/script': './home/script.jsx',
    },
    output: {
        path: __dirname,
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/react'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                }
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            test: /.js$/i,
            extractComments: false,
            terserOptions: {
                output: {
                    comments: false,
                },
            },
        })],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
