import CopyPlugin from 'copy-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import { Configuration, DefinePlugin } from 'webpack'
import { isDev, isProd, mode, isCustomer } from './env'

const rootDir = path.resolve(process.cwd())
const appPath = isCustomer ? 'packages/customer' : 'packages/operator'
const appDir = `${rootDir}/${appPath}`
const buildPath = path.resolve(rootDir, `${appPath}/build`)
const srcPath = path.resolve(rootDir, `${appPath}/src`)

const config: Configuration = {
  entry: `${srcPath}/index.tsx`,
  target: isProd ? 'browserslist' : 'web',
  mode: isProd ? 'production' : 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', 'src'],
    alias: isCustomer
      ? {
          '@/customer': srcPath,
          'customer/components': `${srcPath}/components`
        }
      : {
          '@/operator': srcPath,
          'operator/components': `${srcPath}/components`
        }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: isDev,
              rootMode: 'upward'
            }
          }
        ]
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDev
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDev,
              postcssOptions: {
                plugins: [['autoprefixer']]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev
            }
          }
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      }
    ]
  },
  output: {
    path: `${buildPath}`,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcPath}/index.html`
    }),
    new ForkTsCheckerWebpackPlugin({
      async: isDev,
      devServer: isDev,
      typescript: {
        configFile: path.resolve(appDir, './tsconfig.json')
      }
    }),
    new CopyPlugin({
      patterns: [{ from: path.resolve(appDir, './src/assets'), to: 'assets' }]
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(mode)
      }
    })
  ],
  stats: 'errors-only'
}

export default config
