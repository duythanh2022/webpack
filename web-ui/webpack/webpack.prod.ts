import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserJSPlugin from 'terser-webpack-plugin'
import { Configuration } from 'webpack'

const config: Configuration = {
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({})]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    })
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}

export default config
