const TerserPlugin = require('terser-webpack-plugin');
const isDev = true;

module.exports = {
    mode: isDev ? 'development' : 'production',
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
        minimize: !isDev,
        minimizer: [new TerserPlugin({
            test: /.js$/i,
            extractComments: false,
            sourceMap: true,
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
