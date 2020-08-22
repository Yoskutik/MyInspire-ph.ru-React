const autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const os = require('os');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const pages = require('./pages.json');

/**
 * @param {String} env.mode - development/production. Default is development.
 * @param {Boolean} env.hosting - is webpack running on hosting server. Default is false.
 */
module.exports = (env = {}) => {
  const isDev = env.mode ? env.mode === 'development' : true;

  const entries = {};
  const htmlPages = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(pages)) {
    if (!value.innerHTML && !value.innerText) {
      entries[key] = `./${key}/script.jsx`;
    }
    htmlPages.push(
      new HtmlPlugin({
        filename: `${key === 'home' ? '' : `${key}/`}index.html`,
        template: './template.ejs',
        chunks: [key],
        description: value.description,
        keywords: value.keywords,
        title: value.title,
        robots: value.robots,
        isDev,
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
      path: env.hosting
        ? path.resolve(os.homedir(), 'public_html')
        : path.resolve(os.homedir(), 'Projects', 'MyInspire-ph.ru-React'),
      publicPath: '/',
      filename: `[name]/${isDev ? 'index.bundle' : '[contenthash]'}.js`,
      chunkFilename: `./assets/chunks/${isDev ? '[id]' : '[contenthash]'}.chunk.js`,
    },
    devServer: {
      port: 80,
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
          test: /\.(otf|jpg|webp)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
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
      new CopyPlugin({
        patterns: [
          'favicon.ico',
          '.htaccess',
          'robots.txt',
          'sitemap.xml',
          { from: './api', to: './api' },
          { from: './assets/photos/ava-500x500.jpg', to: './assets/photos' },
        ],
      }),
    ],
  };
};
