const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = env => {
    const isDev = env && env.MODE ? env.MODE === 'development' : true;

    return {
        mode: isDev ? 'development' : 'production',
        devtool: 'source-map',
        entry: {
            './home/script': './home/script.jsx',
            './prices/script': './prices/script.jsx',
            './contacts/script': './contacts/script.jsx',
            './portfolio/script': './portfolio/script.jsx',
            './extra/script': './extra/script.jsx',
            './extra/poses/script': './extra/poses/script.jsx',
            './extra/studios/script': './extra/studios/script.jsx',
            './extra/stylists/script': './extra/stylists/script.jsx',
            './extra/locations/script': './extra/locations/script.jsx',
        },
        output: {
            path: __dirname,
            publicPath: '/',
            filename: '[name].bundle.js',
            chunkFilename: './assets/chunks/[chunkhash].chunk.js',
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/react'],
                            plugins: [
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-syntax-dynamic-import',
                                '@babel/plugin-transform-runtime',
                            ],
                        },
                    },
                },
            ],
        },
        optimization: {
            minimize: !isDev,
            minimizer: [
                new TerserPlugin({
                    test: /.js$/i,
                    extractComments: false,
                    terserOptions: {
                        output: {
                            comments: false,
                        },
                    },
                }),
            ],
        },
        resolve: {
            extensions: ['.jsx', '.js'],
            alias: {
                '@elements': path.resolve(__dirname, 'assets/elements'),
                '@': __dirname,
            },
        },
    };
};
