import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { merge } from 'webpack-merge'

import common from './webpack.common.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const ROOT_DIRECTORY = path.join(__dirname, '..')
const PUBLIC_DIRECTORY = path.join(ROOT_DIRECTORY, 'public')

export default merge(common, {
  mode: 'development',
  devtool: 'source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'style-loader',
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
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: PUBLIC_DIRECTORY,
    historyApiFallback: true,
    port: 8080,
  },
})
