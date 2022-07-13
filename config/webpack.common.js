import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

import ESLintWebpackPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const __dirname = dirname(fileURLToPath(import.meta.url))

const ROOT_DIRECTORY = path.join(__dirname, '..')
const SRC_DIRECTORY = path.join(ROOT_DIRECTORY, 'src')
const PUBLIC_DIRECTORY = path.join(ROOT_DIRECTORY, 'public')

export default {
  entry: path.join(SRC_DIRECTORY, 'index.tsx'),
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new ESLintWebpackPlugin({
      fix: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(PUBLIC_DIRECTORY, 'index.html'),
      favicon: path.join(PUBLIC_DIRECTORY, 'favicon.ico'),
      inject: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@entities': path.resolve('./src/entities'),
      '@features': path.resolve('./src/features'),
      '@shared': path.resolve('./src/shared'),
      '@pages': path.resolve('./src/pages'),
    },
  },
}
