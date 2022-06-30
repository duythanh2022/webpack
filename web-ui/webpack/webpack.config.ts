import merge from 'webpack-merge'
import { isProd } from './env'
import commonConfig from './webpack.common'
import devConfig from './webpack.dev'
import prodConfig from './webpack.prod'

export default () =>
  isProd ? merge(commonConfig, prodConfig) : merge(commonConfig, devConfig)
