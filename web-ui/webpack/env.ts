export const mode = process.env.NODE_ENV ?? 'production'
export const isProd = process.env.NODE_ENV === 'production'
export const isDev = !isProd
export const isCustomer = process.env.APP
