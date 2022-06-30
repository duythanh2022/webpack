interface IConfig {
  BASE_API_URL: string
}

const config: IConfig = {
  BASE_API_URL: process.env.BASE_API_URL || 'http://localhost:8080/'
}

export default config
