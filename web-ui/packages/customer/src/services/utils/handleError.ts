interface handleErrorParams {
  message: string
  data: any
  status: number
}

export default async function (params: handleErrorParams) {
  const { message, data, status } = params
  return Promise.reject({ message, data, status })
}
