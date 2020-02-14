const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');
const context = path.resolve(__dirname, 'src');

module.exports = {
  mode: 'development',
  entry: './index.tsx',
  context,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'boooks.bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BOOOKS',
      inlineSource: '.(js|css)$',
      template: __dirname + '/public/index.html',
      filename: __dirname + '/dist/index.html',
    }),
    new HtmlWebpackRootPlugin(),
  ],
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, 'src/client/ui'),
      '@client': path.resolve(__dirname, 'src/client'),
      '@components': path.resolve(__dirname, 'src/client/components'),
      '@pages': path.resolve(__dirname, 'src/client/pages'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-typescript',
                  {isTSX: true, allExtensions: true},
                ],
              ],
              plugins: [
                '@babel/transform-react-jsx',
                [
                  'react-css-modules',
                  {
                    context,
                    autoResolveMultipleImports: true,
                    generateScopedName: '[name]__[local]-[hash:base64:5]',
                    handleMissingStyleName: 'warn',
                    webpackHotModuleReloading: true,
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.module\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: {
                context,
                localIdentName: '[name]__[local]-[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')(),
                require('postcss-custom-properties')({
                  preserve: false,
                  importFrom: 'src/client/css/variables.css',
                }),
              ],
            },
          },
        ],
      },
    ],
  },
};
