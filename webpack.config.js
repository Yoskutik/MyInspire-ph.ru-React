const autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const os = require('os');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const pages = require('./pages.json');

module.exports = env => {
    const isDev = env && env.MODE ? env.MODE === 'development' : true;

    const entries = {};
    const htmlPages = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(pages)) {
        if (!value.innerHTML && !value.innerText) {
            entries[key] = `./${key}/script.jsx`;
        }
        htmlPages.push(
            new HtmlWebpackPlugin({
                filename: `${key === 'home' ? '' : `${key}/`}index.html`,
                template: './template.ejs',
                chunks: [key],
                description: value.description,
                keywords: value.keywords,
                title: value.title,
                robots: value.robots,
                innerHTML: value.innerHTML,
                innerText: value.innerText,
                minify: isDev ? false : {
                    caseSensitive: false,
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: false,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    removeScriptTypeAttributes: true,
                    keepClosingSlash: false,
                    minifyJS: { compress: { conditionals: false } },
                    minifyCSS: true,
                    minifyURLs: true,
                    sortAttributes: true,
                    sortClassName: true,
                },
            }),
        );
    }

    return {
        mode: isDev ? 'development' : 'production',
        devtool: isDev ? 'source-map' : false,
        entry: entries,
        output: {
            path: (env && env.hosting)
                ? path.resolve(os.homedir(), 'public_html')
                : path.resolve(os.homedir(), 'Projects', 'MyInspire-ph.ru-React'),
            publicPath: '/',
            filename: `[name]/${isDev ? 'index.bundle' : '[hash]'}.js`,
            chunkFilename: './assets/chunks/[chunkhash].chunk.js',
        },
        devServer: {
            port: 8089,
            compress: true,
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
                {
                    test: /\.scss$/i,
                    exclude: /node_modules/,
                    use: [
                        { loader: MiniCssExtractPlugin.loader },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDev,
                                url: true,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [autoprefixer()],
                                sourceMap: isDev,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: isDev },
                        },
                    ],
                },
                {
                    test: /\.(png|otf|jpg|webp)$/,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets',
                        name: '[name].[ext]',
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
                    parallel: false,
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
                '@elements': path.resolve(__dirname, 'assets', 'elements'),
                '@styles': path.resolve(__dirname, 'assets', 'styles'),
                '@assets': path.resolve(__dirname, 'assets'),
            },
        },
        plugins: [
            ...htmlPages,
            new MiniCssExtractPlugin({
                filename: `[name]/${isDev ? 'style' : '[hash]'}.css`,
            }),
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin({
                patterns: [
                    { from: './favicon.ico', to: '.' },
                    { from: './.htaccess', to: '.' },
                    { from: './robots.txt', to: '.' },
                    { from: './sitemap.xml', to: '.' },
                    { from: './api', to: './api' },
                    { from: './home/photos', to: './home/photos' },
                    { from: './portfolio/photos', to: './portfolio/photos' },
                    { from: './extra/locations/photos', to: './extra/locations/photos' },
                    { from: './extra/poses/photos', to: './extra/poses/photos' },
                    { from: './extra/studios/photos', to: './extra/studios/photos' },
                ],
            }),
        ],
    };
};
