import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { merge } from 'webpack-merge'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

import common from './webpack.common.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.[contenthash].js',
  },
})
