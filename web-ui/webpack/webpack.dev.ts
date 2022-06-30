import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import {
  Configuration as WebpackConfiguration,
  HotModuleReplacementPlugin
} from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import { isCustomer } from './env'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const config: Configuration = {
  devtool: 'cheap-module-source-map',
  cache: true,
  devServer: {
    hot: true,
    open: true,
    port: isCustomer ? 3000 : 3001,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    client: {
      logging: 'none'
    }
  },
  plugins: [new ReactRefreshWebpackPlugin(), new HotModuleReplacementPlugin()]
}

export default config
