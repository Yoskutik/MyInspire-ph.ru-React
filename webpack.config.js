const TerserPlugin = require('terser-webpack-plugin');
const isDev = true;

module.exports = {
    mode: isDev ? 'development' : 'production',
    devtool: 'source-map',
    entry: {
        './home/script': './home/script.jsx',
        './prices/script': './prices/script.jsx',
        './contacts/script': './contacts/script.jsx',
        './extra/script': './extra/script.jsx',
        './extra/locations/script': './extra/locations/script.jsx',
        './extra/poses/script': './extra/poses/script.jsx',
        './extra/stylists/script': './extra/stylists/script.jsx',
        './extra/studios/script': './extra/studios/script.jsx',
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
        extensions: ['.jsx', '.js'],
    }
};
